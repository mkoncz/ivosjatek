// Import ReactJS module.
import React from 'react';

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

/**
 * List of the rules.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 */
const Rules = props => {
  return (
    <div className="page-frame">
      <Helmet>
        <title>{props.i18n.t("nav.rules")} | {props.i18n.t("nav.title")}</title>
      </Helmet>
      <h4>{props.i18n.t("rules:terms_title")}</h4>
      <ul>
        <li>{props.i18n.t("rules:term_1")}</li>
        <li>{props.i18n.t("rules:term_2")}</li>
        <li>{props.i18n.t("rules:term_3")}</li>
        <li>{props.i18n.t("rules:term_4")}</li>
        <li>{props.i18n.t("rules:term_5")}</li>
      </ul>
      <h4>{props.i18n.t("rules:rules_title")}</h4>
      <ul>
        <li>{props.i18n.t("rules:rule_1")}</li>
        <li>{props.i18n.t("rules:rule_2")}</li>
        <li>{props.i18n.t("rules:rule_3")}</li>
        <li>{props.i18n.t("rules:rule_4")}</li>
      </ul>
    </div>
  );
}

// Export component.
export default Rules;
