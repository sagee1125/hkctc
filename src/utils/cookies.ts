const allowedKeys = ["user_id", "lang", "session_id"];

export function setSafeCookie(
  key: string,
  value: string,
  options?: CookieOptions
) {
  if (!allowedKeys.includes(key)) return;

  const encodedValue = encodeURIComponent(value);
  document.cookie = `${key}=${encodedValue}; path=/; ${
    options?.secure ? "Secure;" : ""
  } SameSite=Strict`;
}

export function getCookie(key: string): string | null {
  const cookies = document.cookie.split(";");
  for (const c of cookies) {
    const [k, v] = c.trim().split("=");
    if (k === key) return decodeURIComponent(v || "");
  }
  return null;
}

type CookieOptions = {
  secure?: boolean;
};
