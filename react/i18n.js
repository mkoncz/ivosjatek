import * as localized_entries_hu from "./locales/common_hu.json"
import * as localized_entries_en from "./locales/common_en.json"

// Import modules for cookie handling.
import Cookies from "universal-cookie";

var cookies = new Cookies();

var lang = null != cookies.get("lang") ? cookies.get("lang") : "hu";

export const t = (key) => {
  let entries = lang === "hu" ? localized_entries_hu.entries : localized_entries_en.entries;

  for (const [entry_key, value] of Object.entries(entries)) {
    if (entry_key === key) {
      return value;
    }
  }
  return "";
}

export const reloadLanguage = (selectedLanguage) => {
  cookies.set("lang", selectedLanguage, { path: "/", "secure": true });
  window.location.reload();
}

export const initLanguageCookie = () => {
  if(cookies.get("lang") == null){
    cookies.set("lang", "hu", { path: "/", "secure": true });
  }
}