import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, LoaderCircle, RotateCcw, Send, X } from "lucide-react";
import { askAssistant, getAssistantStatus } from "../../services/api.js";
import { getLocalAssistantReply } from "../../services/assistant.js";

const suggestedQuestions = [
  "What courses does SNBP University offer?",
  "How can I apply for admission?",
  "What are the eligibility requirements?",
  "Which departments are available?",
  "Where can I find faculty information?",
  "What facilities are available?",
  "How can I contact the university?",
];

export default function UniversityAssistant({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [assistantStatus, setAssistantStatus] = useState(null);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [contentError, setContentError] = useState("");
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open || contentLoaded) return undefined;
    let active = true;
    getAssistantStatus()
      .then(({ data }) => {
        if (!active) return;
        setAssistantStatus(data);
      })
      .catch(() => {
        if (active) {
          setAssistantStatus({ configured: false, unavailable: true });
          setContentError("Live assistant service is unavailable. You can still ask about information published on this website.");
        }
      })
      .finally(() => {
        if (active) setContentLoaded(true);
      });
    return () => {
      active = false;
    };
  }, [contentLoaded, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  async function sendMessage(event, suggestedQuestion) {
    event?.preventDefault();
    const text = (suggestedQuestion || question).trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setQuestion("");
    setError("");
    setLoading(true);

    if (assistantStatus?.configured) {
      try {
        const { data } = await askAssistant(nextMessages.slice(-8));
        if (typeof data?.answer !== "string" || !data.answer.trim()) {
          throw new Error("The assistant service returned an empty answer.");
        }
        if (data.mode === "ai") {
          setAssistantStatus((current) => ({ ...current, configured: true, tested: true }));
        }
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content: data.answer,
            source: data.source,
            fallback: data.fallback,
          },
        ]);
        setLoading(false);
        return;
      } catch (requestError) {
        if (requestError.response) {
          const response = requestError.response.data;
          if (response?.message) {
            setMessages((current) => [
              ...current,
              {
                role: "assistant",
                content: response.message,
                fallback: response.fallback,
              },
            ]);
          } else {
            setError("The assistant service returned an error. Please try again or contact the university.");
          }
          setLoading(false);
          return;
        }

        setAssistantStatus((current) => ({ ...current, configured: false, unavailable: true }));
      }
    }

    const reply = getLocalAssistantReply(text);
    setMessages((current) => [
      ...current,
      {
        role: "assistant",
        content: reply.answer,
        source: reply.source,
        fallback: reply.fallback,
      },
    ]);
    setLoading(false);
  }

  if (!open) return null;

  return (
        <section
          id="snbp-assistant-panel"
          className="assistant-panel"
          role="dialog"
          aria-labelledby="snbp-assistant-title"
        >
          <div className="assistant-header">
            <div className="assistant-brand">
              <span className="assistant-mark" aria-hidden="true">S</span>
              <div>
                <h2 id="snbp-assistant-title">SNBP AI Assistant</h2>
                <p>
                  {assistantStatus?.configured && assistantStatus.tested
                      ? "AI response connected this session"
                      : assistantStatus?.configured
                        ? "Provider configured · connection not yet tested"
                      : assistantStatus?.unavailable
                        ? "Published university information · live AI unavailable"
                      : assistantStatus
                          ? "Published university information · no AI connected"
                          : "Connecting to university information…"}
                </p>
              </div>
            </div>
            <div className="assistant-header-actions">
              <button
                type="button"
                className="assistant-close"
                onClick={() => setMessages([])}
                disabled={!messages.length}
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                <RotateCcw size={17} />
              </button>
              <button type="button" className="assistant-close" onClick={onClose} aria-label="Close assistant">
                <X size={19} />
              </button>
            </div>
          </div>

          <div className="assistant-messages" ref={listRef} role="log" aria-live="polite" aria-relevant="additions">
            {!messages.length ? (
              <div className="assistant-welcome">
                <p className="assistant-welcome-title">How can we help?</p>
                <p>Ask about programmes, admissions, campus life, or the university.</p>
                {assistantStatus && !assistantStatus.configured ? (
                  <p className="assistant-disclosure">
                    AI responses are not enabled yet. Answers use published university information only.
                  </p>
                ) : null}
                <div className="assistant-suggestions">
                  {suggestedQuestions.map((suggestedQuestion) => (
                    <button
                      key={suggestedQuestion}
                      type="button"
                      disabled={loading}
                      onClick={() => sendMessage(null, suggestedQuestion)}
                    >
                      {suggestedQuestion}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </button>
                  ))}
                  {contentError ? <p className="assistant-error" role="status">{contentError}</p> : null}
                  {assistantStatus?.unavailable || contentError ? (
                    <button
                      type="button"
                      className="assistant-retry"
                      onClick={() => {
                        setAssistantStatus(null);
                        setContentError("");
                        setContentLoaded(false);
                      }}
                    >
                      Retry university information
                    </button>
                  ) : null}
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`assistant-message ${message.role}`}>
                  <p>{message.content}</p>
                  {message.source ? <span className="assistant-source">{message.source}</span> : null}
                  {message.fallback ? (
                    <Link to={message.fallback.path} onClick={onClose}>
                      {message.fallback.label} <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              ))
            )}
            {loading ? (
              <div className="assistant-typing" role="status" aria-label="Assistant is responding">
                <span /><span /><span />
                <span className="sr-only">Assistant is responding</span>
              </div>
            ) : null}
            {error ? <p className="assistant-error" role="alert">{error}</p> : null}
          </div>

          <form className="assistant-form" onSubmit={(event) => sendMessage(event)}>
            <label className="sr-only" htmlFor="assistant-question">Ask SNBP AI Assistant</label>
            <textarea
              id="assistant-question"
              ref={inputRef}
              value={question}
              onChange={(event) => setQuestion(event.target.value.slice(0, 1200))}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  sendMessage(event);
                }
              }}
              placeholder="Ask a question…"
              rows={1}
              maxLength={1200}
              disabled={loading}
            />
            <button type="submit" disabled={!question.trim() || loading} aria-label="Send message">
              {loading ? <LoaderCircle className="animate-spin" size={18} /> : <Send size={18} />}
            </button>
          </form>
          <p className="assistant-privacy">Conversation is kept in this browser session only.</p>
        </section>
  );
}
