// Label for a project's external link, derived from its URL.
export function storeName(url) {
  if (url.includes("play.google.com")) return "Google Play";
  if (url.includes("itch.io")) return "itch.io";
  if (url.includes("steampowered.com")) return "Steam";
  return "Visit";
}
