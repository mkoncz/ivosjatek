import common_hu from "./locales/common_hu.json";
import common_en from "./locales/common_en.json";

// Import cookie handling module.
import Cookies from "universal-cookie";

var cookies = new Cookies();

var lang = null != cookies.get("lang") ? cookies.get("lang") : "hu";

export const t = (key) => {
  let entries =
    lang === "hu" ? common_hu.localized_entries : common_en.localized_entries;

  for (const [entry_key, value] of Object.entries(entries)) {
    if (entry_key === key) {
      return value;
    }
  }
  return "";
};

export const reloadLanguage = (selectedLanguage) => {
  if (selectedLanguage !== cookies.get("lang")) {
    cookies.set("lang", selectedLanguage, { path: "/", secure: true });
    if (window.location.pathname === "/en/") {
      window.location.replace("/");
    } else {
      window.location.reload();
    }
  }
};

export const initLanguageCookie = () => {
  if (cookies.get("lang") == null) {
    cookies.set("lang", "hu", { path: "/", secure: true });
  }
};
