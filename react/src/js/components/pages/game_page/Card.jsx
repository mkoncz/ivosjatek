// Import React modules.
import React, { Component } from "react"

// Import cocktail logo for the back page of the card.
import hu_logo from "./../../../../img/hu_flag.png";
import en_logo from "./../../../../img/en_flag.png";
import adult_logo from "./../../../../img/18.png";

import CardBack from "./CardBack"

// Import custom styles.
import "./../../../../css/style.css";
// Import animation styles.
import "./../../../../css/animate.css";

// Import module for cookie handling.
import Cookies from "universal-cookie";


/**
 * The page contains the actual Card.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language. Changing the currentLanguage property triggers an update at the language change.
 */
export default class Card extends Component {

  constructor() {
    super();

    this.cookies = new Cookies();

    this.state = {
      flipClasses: "animated bounceInLeft"
    };
  }

  componentDidMount() {

    // ANDROID BROWSER QUICK FIX
    // Android browsers needs an initial css transformation.
    // It can be activated with the active class.

    // Bounces out the current card.
    this.setState({
      flipClasses: "active animated bounceInLeft"
    });

    // Bounces out the current card.
    setTimeout(() => {
      this.setState({
        flipClasses: "animated bounceInLeft"
      });
    }, 2);

  }

  render() {

    let isNextButtonHidden = false;
    let content;

    var logo = "cocktail.svg";
    let bgColor = "#d3f42f";

    // Asks the user age if it is not added yet. 
    if (null == this.cookies.get("lang")) {
      content = this.createLanguageSelectorCard();
      isNextButtonHidden = true;
      // Asks the user age if it is not added yet. 
    } else if (null == sessionStorage.getItem("isAdult")) {
      content = this.createAgeCheckCard();
      isNextButtonHidden = true;
    }
    else {
      content = this.props.currentQuestionModel[this.props.currentLanguage];
      if (this.props.currentQuestionModel.logo !== "") {
        logo = this.props.currentQuestionModel.logo;
      }
      if (this.props.currentQuestionModel.color !== "") {
        bgColor = this.props.currentQuestionModel.color;
      }

    }

    return (
      <div className={`flip-container ${this.state.flipClasses}`} align="center" onClick={this.cardClickHandler}>
        <div className="flipper" >
          <CardBack
            logo={logo}
            bgColor={bgColor}
          />
          <div className="front">
            <div id="kerdes1" className="txt-question">  {content} </div>
            <button
              className={`btn btn-warning btn-lg btn-card ${isNextButtonHidden ? "hidden" : ""}`}
              onClick={this.replaceCard}>
              {this.props.i18n.t("game.next")}
            </button>
          </div>
        </div>
      </div>
    )
  }

  /**
   * Replaces the read card.
   * Bounces out the read card and bounces in the new card.
   * Uses the animations of the animate.css.
   */
  replaceCard = (newQuestion) => {

    // Bounces out the current card.
    setTimeout(() => {
      this.setState({
        flipClasses: "active animated bounceOutRight"
      });
    }, 25);

    // Bounces in the new card.
    setTimeout(() => {
      this.setState({
        flipClasses: "animated bounceInLeft"
      });
    }, 450);

    if (newQuestion || newQuestion == null) {
      this.props.setNewQuestion();
    }
  };

  /**
   * Handles the click event on the unread cards.
   */
  cardClickHandler = () => {

    this.setState({
      flipClasses: "active",
    });
  }

  /**
   * Creates card with the available language logos.
   */
  createLanguageSelectorCard = () => {

    return (
      <div>
        <h3>Select language.</h3><br></br>
        <p>
          <span>
            <img onClick={(e) => this.reloadLanguage("en")} className="lang-logo lang-logo-big" src={en_logo} alt="english-logo" />
          </span>
          <span>
            <img onClick={(e) => this.reloadLanguage("hu")} className="lang-logo lang-logo-big" src={hu_logo} alt="hungarian-logo" />
          </span>
        </p>
      </div>
    )
  }

  /**
   * Creates card with age check question and next button.
   */
  createAgeCheckCard = () => {

    return (
      <div className="age_check">
        <img className="adult_logo" src={adult_logo} alt="adult-logo" />
        <div className="question_block">
          <p>  {this.props.i18n.t("game.age_check_1")} </p>
          <p>  {this.props.i18n.t("game.age_check_2")} </p>
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

    this.replaceCard(true);
    // Timeout needed because render() immediately replaces content and the bouncing is not done yet.
    setTimeout(() => {
      sessionStorage.setItem("isAdult", true)
    }, 450);
  }

  /**
   * Sets the selected language to English and draws the next card.
   */
  reloadLanguage = (language) => {

    // Starts out-bouncing
    this.replaceCard(false);

    // Timeout needed because render() immediately replaces content and the bouncing is not done yet.
    setTimeout(() => {
      this.props.reloadLanguage(language);
    }, 450);

  }

}