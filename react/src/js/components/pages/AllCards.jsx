// Import ReactJS module.
import React, { Component } from "react";

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