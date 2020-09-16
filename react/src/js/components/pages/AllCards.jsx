// Import ReactJS module.
import React, { Component } from "react";

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

// Import question resources.
import * as questions from "./../../../locales/questions.json"

// Import cards style classes.
import "./../../../css/pages/cards.css";

/**
 * All cards listed.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language.
 * @param {function} props.reloadLanguage Changes the language of the page.
 */
export default class AllCards extends Component {

  render() {
    return (
      <div className="page-frame">
        <Helmet>
          <title>{this.props.i18n.t("nav.cards")} | {this.props.i18n.t("nav.title")}</title>
          <meta name="description" content={this.props.i18n.t("desc.cards")} />
          <link rel="canonical" href={`https://ivosjatek.hu/${this.props.currentLanguage === "en" ? "en/" : ""}releases`} />
          <meta property="og:locale" content={this.props.currentLanguage === "en" ? "en_US" : "hu_HU"} />
        </Helmet>
        {questions.default.map((question, index) => {
          return (
            <div key={index} className="sponsor-card white-card">
              <h4>{question.hu.replace("%NAME%", this.props.i18n.t("game.player").toUpperCase())}</h4>
            </div>
          )
        })}
      </div>
    );
  }
}