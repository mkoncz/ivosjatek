// Import React modules.
import React, { Component } from "react"

// Import adult logo.
import adult_logo from "./../../../../img/18.png";


/**
 * The page contains the actual Card.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {function} props.replaceCard Replaces the current card.
 */
export default class PlayerNameCard extends Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div className="pre-card">
        <img className="adult_logo" src={adult_logo} alt="18" />
        <div className="question_block">
          <h5>{this.props.i18n.t("game.age_check_1")}</h5>
          <p>{this.props.i18n.t("game.age_check_2")}</p>
          <p>{this.props.i18n.t("game.age_check_3")}</p>
        </div>
        <button
          className="btn btn-warning btn-lg"
          onClick={this.confirmAdult}>
          {this.props.i18n.t("game.age_check_button")}
        </button>
      </div>
    )
  }

  /**
   * Confirms that the user is an adult.
   * Stores the decition in sessionStorage.
   */
  confirmAdult = () => {
    this.props.replaceCard(false);
    // Timeout needed because render() immediately replaces content and the bouncing is not done yet.
    setTimeout(() => {
      sessionStorage.setItem("isAdult", true)
    }, 450);
  }

}