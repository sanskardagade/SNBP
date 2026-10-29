import { useEffect, useState } from "react";
import { getHomeContent } from "../services/api.js";

const defaultContent = null;

export function useHomeContent() {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getHomeContent()
      .then(({ data }) => {
        if (active && data) setContent(data);
      })
      .catch((error) => {
        console.error("Unable to load homepage content; using local defaults.", error);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { content, loading };
}
