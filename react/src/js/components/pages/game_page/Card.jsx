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
      name: ""
    };

    this.input1 = React.createRef();
    this.input2 = React.createRef();
    this.input3 = React.createRef();
    this.input4 = React.createRef();
    this.input5 = React.createRef();
    this.input6 = React.createRef();
    this.input7 = React.createRef();
    this.input8 = React.createRef();
    this.input9 = React.createRef();
    this.input10 = React.createRef();
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
    } else if (null == sessionStorage.getItem("players")) {
      content = this.createModeSelectorCard();
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
  createModeSelectorCard = () => {

    return (
      <div className="pre-card">
        <h5 className="players-header"><b>{this.props.i18n.t("game.player_names")}</b></h5>
        <form>
          <label>{this.props.i18n.t("game.player")} 1: &nbsp;
          <input type="text" ref={this.input1}></input>
          </label>
          <label> {this.props.i18n.t("game.player")} 2: &nbsp;
          <input type="text" ref={this.input2}></input>
          </label>
          <label> {this.props.i18n.t("game.player")} 3: &nbsp;
          <input type="text" ref={this.input3}></input>
          </label>
          <label> {this.props.i18n.t("game.player")} 4: &nbsp;
          <input type="text" ref={this.input4}></input>
          </label>
          <label> {this.props.i18n.t("game.player")} 5: &nbsp;
          <input type="text" ref={this.input5}></input>
          </label>
          <label> {this.props.i18n.t("game.player")} 6: &nbsp;
          <input type="text" ref={this.input6}></input>
          </label>
          <label> {this.props.i18n.t("game.player")} 7: &nbsp;
          <input type="text" ref={this.input7}></input>
          </label>
          <label> {this.props.i18n.t("game.player")} 8: &nbsp;
          <input type="text" ref={this.input8}></input>
          </label>
          <label> {this.props.i18n.t("game.player")} 9: &nbsp;
          <input type="text" ref={this.input9}></input>
          </label>
          <label> {this.props.i18n.t("game.player")} X: &nbsp;
          <input type="text" ref={this.input10}></input>
          </label>

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
    this.replaceCard(true);
    // Timeout needed because render() immediately replaces content and the bouncing is not done yet.
    setTimeout(() => {
      var players = [];
      if (this.input1.current.value !== "") players.push(this.input1.current.value);
      if (this.input2.current.value !== "") players.push(this.input2.current.value);
      if (this.input3.current.value !== "") players.push(this.input3.current.value);
      if (this.input4.current.value !== "") players.push(this.input4.current.value);
      if (this.input5.current.value !== "") players.push(this.input5.current.value);
      if (this.input6.current.value !== "") players.push(this.input6.current.value);
      if (this.input7.current.value !== "") players.push(this.input7.current.value);
      if (this.input8.current.value !== "") players.push(this.input8.current.value);
      if (this.input9.current.value !== "") players.push(this.input9.current.value);
      if (this.input10.current.value !== "") players.push(this.input10.current.value);
      sessionStorage.setItem("players", JSON.stringify(players));
      console.log(JSON.parse(sessionStorage.getItem("players")));
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