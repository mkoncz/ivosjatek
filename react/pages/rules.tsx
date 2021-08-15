// Import ReactJS module.
import React, { Component } from "react";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * List of the rules.
 */
export default class Rules extends Component {
  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.rules")}
          desc={t("desc.rules")}
          url={"https://ivosjatek.hu/rules"}
        />
        <NavBar />
        <div className="page-frame black-background">
          <h4>{t("rules.terms_title")}</h4>
          <ul>
            <li>{t("rules.term_1")}</li>
            <li>{t("rules.term_2")}</li>
            <li>{t("rules.term_3")}</li>
            <li>{t("rules.term_4")}</li>
            <li>{t("rules.term_5")}</li>
          </ul>
          <h4>{t("rules.rules_title")}</h4>
          <ul>
            <li>{t("rules.rule_1")}</li>
            <li>{t("rules.rule_2")}</li>
            <li>{t("rules.rule_3")}</li>
            <li>{t("rules.rule_4")}</li>
          </ul>
        </div>
      </div>
    );
  }
}
