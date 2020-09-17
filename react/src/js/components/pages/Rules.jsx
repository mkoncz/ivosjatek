// Import ReactJS module.
import React, { Component } from "react";

/**
 * List of the rules.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language.
 * @param {function} props.reloadLanguage Changes the language of the page.
 */


export default class Rules extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.reloadLanguage(this.props.currentLanguage);
  }

  render() {
    return (
      <div className="page-frame">
        <h4>{this.props.i18n.t("rules:terms_title")}</h4>
        <ul>
          <li>{this.props.i18n.t("rules:term_1")}</li>
          <li>{this.props.i18n.t("rules:term_2")}</li>
          <li>{this.props.i18n.t("rules:term_3")}</li>
          <li>{this.props.i18n.t("rules:term_4")}</li>
          <li>{this.props.i18n.t("rules:term_5")}</li>
        </ul>
        <h4>{this.props.i18n.t("rules:rules_title")}</h4>
        <ul>
          <li>{this.props.i18n.t("rules:rule_1")}</li>
          <li>{this.props.i18n.t("rules:rule_2")}</li>
          <li>{this.props.i18n.t("rules:rule_3")}</li>
          <li>{this.props.i18n.t("rules:rule_4")}</li>
        </ul>
      </div>
    );
  }
}
