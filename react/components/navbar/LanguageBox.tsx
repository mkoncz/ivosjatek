// Import React module.
import React from "react";

// Import i18n functions.
import { reloadLanguage, t } from "../../i18n";

/**
 * Component for language selection.
 */
const LanguageBox = () => {
  return (
    <div>
      <img
        onClick={() => {
          reloadLanguage("hu");
        }}
        className="lang-logo"
        src="/img/hu_flag.png"
        alt={t("image_alt.hungarian")}
      />
      <img
        onClick={() => {
          reloadLanguage("en");
        }}
        className="lang-logo"
        src="/img/en_flag.png"
        alt={t("image_alt.english")}
      />
    </div>
  );
};

// Export component.
export default LanguageBox;
