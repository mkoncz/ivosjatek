// Import React modules.
import React, { Component } from "react"


// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import adult logo.
import adult_logo from "./../../../../img/18.png";

import CardBack from "./CardBack"

// Import custom styles.
import "./../../../../css/style.css";
// Import animation styles.
import "./../../../../css/animate.css";




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
      flipClasses: "animated bounceInLeft",
      name: this.getRandomName()
    };

    this.inputs = [this.input1, this.input2, this.input3, this.input4, this.input5,
    this.input6, this.input7, this.input8, this.input9, this.input10];

    this.inputs = this.inputs.map((item) => {
      return React.createRef();
    })
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

    let specialCard = false;
    let content;

    var logo = "cocktail.svg";
    let bgColor = "#d3f42f";

    if (null == sessionStorage.getItem("isAdult")) {
      content = this.createAgeCheckCard();
      specialCard = true;
    } else if (null == sessionStorage.getItem("players") || sessionStorage.getItem("players").length === 0) {
      content = this.createPlayerSelectorCard();
      specialCard = true;
    }
    else {
      content = this.props.currentQuestionModel[this.props.currentLanguage].replace("%NAME%", this.state.name);
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
   * Creates card with age check question and next button.
   */
  createAgeCheckCard = () => {

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
   * Creates card with age check question and next button.
   */
  createPlayerSelectorCard = () => {

    return (
      <div className="pre-card">
        <h5 className="players-header"><b>{this.props.i18n.t("game.player_names")}</b></h5>
        <form>
          {this.inputs.map((input, index) =>
            <label key={index}>{this.props.i18n.t("game.player")} {index + 1}: &nbsp;
            <input type="text" ref={input} ></input>
            </label>)}
        </form>
        <button
          className="btn btn-warning btn-lg add-button"
          onClick={() => { this.addPlayers() }}>
          {this.props.i18n.t("game.done")}
        </button>
      </div>
    )
  }

  /**
   * Creates card with age check question and next button.
   */
  addPlayers = () => {
    let that = this;
    this.replaceCard(true);
    // Timeout needed because render() immediately replaces content and the bouncing is not done yet.
    setTimeout(() => {
      var players = [];
      that.inputs.forEach((item, index) => {
        if (item.current.value !== "") {
          players.push(item.current.value);
        }
      })

      // If the user does not give any player names, we add some default ones.
      if (players.length === 0) {
        alert(this.props.i18n.t("game.please_add_player_name"));
        return;
      }
      sessionStorage.setItem("players", JSON.stringify(players));
    }, 450);
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
  * Gets the imported image resource based on the logo keyword.
  * @param {string} keyword Logo field of the question JSON element. 
  */
  getRandomName = () => {
    let names = JSON.parse(sessionStorage.getItem("players"));
    if (names != null && names.length != 0) {
      return names[Math.floor(Math.random() * names.length)];
    } else {
      return "";
    }
  }

}