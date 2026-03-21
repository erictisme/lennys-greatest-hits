export function getSessionId(): string {
  if (typeof window === "undefined") return "";
  const key = "lgh-session-id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}
