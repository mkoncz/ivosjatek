// Import React modules.
import React, { Component } from "react"

// Import question resources.
import * as hun_question_resource from "./../../../../locales/questions_hu.json"
import * as en_question_resource from "./../../../../locales/questions_en.json"

import Card from "./Card"

// Import custom styles.
import "./../../../../css/style.css";
// Import animation styles.
import "./../../../../css/animate.css";

/**
 * The page contains the Game with the current Card.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language. Changing the currentLanguage property triggers an update at the language change.
 */
export default class Game extends Component {

  constructor() {
    super();
    this.state = {
      questions: [],
      currentQuestion: "",
      currentLanguage: ""
    };
  }

  // Sets pack of the questions when page is opened.
  componentDidMount() {
    if (this.state.currentLanguage === "") {
      this.setState({
        currentQuestion: "language"
      });
    }
  }

  // Sets a new pack if the language is changed.
  componentDidUpdate() {
    if (this.props.currentLanguage !== this.state.currentLanguage) {
      this.setLocalizedPack();
    }
  }

  render() {
    // i18next module. 
    const i18n = this.props.i18n;
    // Count the left cards.
    const number_of_left_cards = this.state.questions.length;

    return (
      <div align="center" className="page-frame" width="100%">

        {number_of_left_cards !== 0 ?
          <div className="left-card-label animated fadeIn">
            {i18n.t("game.card_left").replace("%NUMBER%", number_of_left_cards)}
          </div> : 
          <div className="left-card-label">
            &nbsp;
          </div> 
        }

        <Card
          i18n={i18n}
          selectEnglish={this.props.selectEnglish}
          selectHungarian={this.props.selectHungarian}
          setNewQuestion={this.setNewQuestion}>
          {this.state.currentQuestion}
        </Card>
      </div>
    )
  }

  /**
   * Sets the question text on the new card.
   */
  setNewQuestion = () => {
    // The language was just selected.
    // The next 
    console.log(this.state.currentLanguage)
    if (this.state.currentLanguage === "") {
      return;
    }

    // Sets the text of the new card.
    if (this.state.questions.length !== 0) {

      let that = this;

      let randomQuestion = this.state.questions[Math.floor(Math.random() * this.state.questions.length)];

      setTimeout(function () {

        // Removes used question from the question pack.
        for (var i = that.state.questions.length - 1; i >= 0; i--) {
          if (that.state.questions[i] === that.state.currentQuestion) {
            var array = [...that.state.questions]; // make a separate copy of the array
            var index = array.indexOf(that.state.currentQuestion);
            if (index !== -1) {
              array.splice(index, 1);
              that.setState({ questions: array });
            }
            break;
          }
        }
        // Sets the current question.
        that.setState({
          currentQuestion: randomQuestion
        });
      }, 500);
    } else {
      // Notifies the user if the card pack is empty.
      this.setState({
        currentQuestion: this.props.i18n.t("game.no_more_question")
      });
    }

  }

  /**
   * Sets the localized pack.
   */
  setLocalizedPack() {

    let allQuestions = [];

    let localizedPack;

    if (hun_question_resource != null && hun_question_resource.questions != null && this.props.currentLanguage === "hu") {
      localizedPack = hun_question_resource.questions
    } else if (en_question_resource != null && en_question_resource.questions != null && this.props.currentLanguage === "en") {
      localizedPack = en_question_resource.questions
    } else {
      alert(this.props.i18n.t("game.no_more_question"));
      return;
    }

    const categories = Object.keys(localizedPack)
    for (const category of categories) {
      for (const question of localizedPack[category]) {
        allQuestions.push(question);
      }
    }

    this.setState({
      questions: allQuestions,
      currentLanguage: this.props.currentLanguage
    },
      () => {
        this.setNewQuestion();
      }
    );
  }
}