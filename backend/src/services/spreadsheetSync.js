import { env } from "../config/env.js";

export async function syncSubmissionToGoogleSheet({ source, payload }) {
  const sheetUrl = env.googleSheetWebAppUrl?.trim();

  if (!sheetUrl) {
    return { enabled: false };
  }

  const response = await fetch(sheetUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      source,
      ...payload,
      createdAt: payload.createdAt || new Date().toISOString()
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google Sheet sync failed (${response.status}): ${text || response.statusText}`);
  }

  return { enabled: true, ok: true };
}
