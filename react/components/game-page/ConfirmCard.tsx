// Import React modules.
import React, { Component } from "react";

// Import translate function.
import { t } from "../../i18n";

// Interfaces for props and state.
interface ConfirmCardProps {
  replaceCard(newQuestion: boolean): any;
}

/**
 * The page contains the actual Card.
 * 
 * @param {function} props.replaceCard Replaces the current card.
 */
export default class ConfirmCard extends Component<ConfirmCardProps> {

  render() {

    return (
      <div className="pre-card">
        <h1>18+</h1>
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
   * Stores the decition in SessionStorage.
   */
  confirmAdult = () => {
    this.props.replaceCard(false);
    // Timeout needed because render() immediately replaces content and the bouncing is not done yet.
    setTimeout(() => {
      sessionStorage.setItem("isAdult", "true");
    }, 450);
  }
}