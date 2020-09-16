// Import ReactJS module.
import React, { Component } from "react";

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>{this.props.i18n.t("nav.rules")} | {this.props.i18n.t("nav.title")}</title>
          <meta name="description" content={this.props.i18n.t("desc.rules")} />
          <link rel="canonical" href={`https://ivosjatek.hu/${this.props.currentLanguage === "en" ? "en/" : ""}rules`} />
          <meta property="og:locale" content={this.props.currentLanguage === "en" ? "en_US" : "hu_HU"} />
        </Helmet>
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
