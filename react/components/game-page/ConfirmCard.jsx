// Import React modules.
import React, { Component } from "react";

import { t } from "./../../i18n";


/**
 * The page contains the actual Card.
 * 
 * @param {function} props.replaceCard Replaces the current card.
 */
export default class PlayerNameCard extends Component {

  render() {

    return (
      <div className="pre-card">
        <img className="adult_logo" src="/img/18.png" alt="18" />
        <div className="question_block">
          <h5>{t("game.age_check_1")}</h5>
          <p>{t("game.age_check_2")}</p>
          <p>{t("game.age_check_3")}</p>
        </div>
        <button
          className="btn btn-warning btn-lg"
          onClick={this.confirmAdult}>
          {t("game.age_check_button")}
        </button>
      </div>
    )
  }

  /**
   * Confirms that the user is an adult.
   * Stores the decition in cookies.
   */
  confirmAdult = () => {
    this.props.replaceCard(false);
    // Timeout needed because render() immediately replaces content and the bouncing is not done yet.
    setTimeout(() => {
      sessionStorage.setItem("isAdult", true)
    }, 450);
  }

}