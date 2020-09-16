// Import React modules.
import React, { Component } from "react"

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import CardBack component.
import CardBack from "./CardBack"
import PlayerNameCard from "./PlayerNameCard"
import ConfirmCard from "./ConfirmCard"


/**
 * The page contains the actual Card.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language. Changing the currentLanguage property triggers an update at the language change.
 * @param {string} props.setNewQuestion Replaces the read question with a new question.
 * @param {string} props.currentQuestionModel.logo Logo of the current card.
 * @param {string} props.currentQuestionModel.color Background color of the current card.
 */
export default class Card extends Component {

  constructor() {
    super();

    this.cookies = new Cookies();

    this.state = {
      flipClasses: "animated bounceInLeft",
      name: this.getRandomName()
    };

    this.inputs = [];

    for (let i = 0; i < 10; i++) {
      this.inputs.push(React.createRef())
    }
  }

  componentDidMount() {

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

    // Set default value of specialCard to false.
    // Special cards are the "age check card" and the "players names card". 
    let specialCard = false;
    let content;

    // Set default logo.
    var logo = "cocktail.svg";
    // Set default background color.
    let bgColor = "#d3f42f";

    // If the game does not asked about age in this session, it creates an "age check card".
    if (null == sessionStorage.getItem("isAdult")) {
      content = this.createAgeCheckCard();
      specialCard = true;
      // If the game does not asked about player names, it creates an "player names card".
    } else if (null == sessionStorage.getItem("players") || sessionStorage.getItem("players").length === 0) {
      content = this.createPlayerSelectorCard();
      specialCard = true;
    }
    else {
      // The %NAME% wildcard is replaced with a random user's name.
      content = this.props.currentQuestionModel[this.props.currentLanguage].replace("%NAME%", this.state.name === "" ? this.getRandomName() : this.state.name);
      // If the current question has a sporsor, the logo is overridden.
      if (this.props.currentQuestionModel.logo !== "") {
        logo = this.props.currentQuestionModel.logo;
      }
      // If the current question has a sporsor, the background color is overridden.
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
            i18n={this.props.i18n}
          />
          <div className="front">
            <div className={!specialCard ? "txt-question" : "special-card"}>  {content} </div>
            <button
              className={`btn btn-warning btn-lg btn-card ${specialCard ? "hidden" : ""}`}
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

    if (newQuestion || newQuestion == null) {
      this.props.setNewQuestion();
    }
    // Bounces out the current card.
    setTimeout(() => {
      this.setState({
        flipClasses: "active animated bounceOutRight"
      });
    }, 25);

    // Bounces in the new card.
    setTimeout(() => {
      this.setState({
        flipClasses: "animated bounceInLeft",
        name: this.getRandomName()
      });
    }, 450);
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
   * Creates card with age check question and next button.
   */
  createAgeCheckCard = () => {

    return (
      <ConfirmCard
        i18n={this.props.i18n}
        replaceCard={this.replaceCard}
      />
    )
  }

  /**
   * Creates card with age check question and next button.
   */
  createPlayerSelectorCard = () => {

    return (
      <PlayerNameCard
        i18n={this.props.i18n}
        replaceCard={this.replaceCard}
      />
    )
  }


  /**
  * Gets the imported image resource based on the logo keyword.
  * @param {string} keyword Logo field of the question JSON element. 
  */
  getRandomName = () => {
    let names = JSON.parse(sessionStorage.getItem("players"));
    if (names != null && names.length !== 0) {
      return names[Math.floor(Math.random() * names.length)];
    } else {
      return "";
    }
  }

}