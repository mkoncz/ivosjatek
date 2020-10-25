import * as localized_entries_hu from "./locales/common_hu.json"
import * as localized_entries_en from "./locales/common_en.json"

// Import modules for cookie handling.
import Cookies from "universal-cookie";

var cookies = new Cookies();

var lang = null != cookies.get("lang") ? cookies.get("lang") : "hu";

export function t(key) {
  let entries = lang === "hu" ? localized_entries_hu.entries : localized_entries_en.entries;

  for (const [entry_key, value] of Object.entries(entries)) {
    if (entry_key === key) {
      return value;
    }
  }
  return "";
}

export function reloadLanguage(selectedLanguage) {
  lang = selectedLanguage
  cookies.set("lang", lang, { path: "/", "secure": true });
  window.location.reload();
}