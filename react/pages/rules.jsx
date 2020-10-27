// Import ReactJS module.
import React, { Component } from "react";

import NavBar from "./../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

import { t } from "./../i18n";

/**
 * List of the rules.
 * 
 */
export default class Rules extends Component {

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.rules")}
          desc={t("desc.rules")}
        />
        <NavBar/>
        <div className="page-frame">
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
