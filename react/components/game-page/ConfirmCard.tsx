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
      <div>
        <h1 className="c-game-card__special-content-header">18+</h1>
        <h5 className="c-game-card__special-content-subheader">
          {t("game.age_check_1")}
        </h5>
        <p className="c-game-card__special-content-paragraph">
          {t("game.age_check_2")}
        </p>
        <button
          className="c-game-card__button btn btn-lg"
          onClick={this.confirmAdult}
        >
          {t("game.age_check_button")}
        </button>
      </div>
    );
  }

  /**
   * Confirms that the user is an adult.
   * Stores the decition in SessionStorage.
   */
  confirmAdult = () => {
    this.props.replaceCard(false);
    // Timeout needed because render() immediately replaces content and the bouncing out did not finish yet.
    setTimeout(() => {
      sessionStorage.setItem("isAdult", "true");
    }, 450);
  };
}
