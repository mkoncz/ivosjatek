// Import React modules.
import React, { Component } from "react"

// Import question resources.
import * as questions from "./../../../../locales/questions.json"

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

  constructor(props) {
    super(props);
    this.questions = questions.default;

    this.state = {
      currentQuestion: this.props.currentLanguage==="" ? "" : this.getRandomQuestion()
    };
  }

  render() {
    // i18next module. 
    const i18n = this.props.i18n;
    // Count the left cards.
    const number_of_left_cards = this.questions.length;

    return (
      <div align="center" className="page-frame game-view" width="100%">

        {this.props.currentLanguage!=="" ?
          <div className="left-card-label animated fadeIn">
            {i18n.t("game.card_left").replace("%NUMBER%", number_of_left_cards)}
          </div> :
          <div className="left-card-label">
            &nbsp;
          </div>
        }

        <Card
          i18n={i18n}
          currentLanguage={this.props.currentLanguage}
          selectEnglish={this.props.selectEnglish}
          selectHungarian={this.props.selectHungarian}
          setNewQuestion={this.setNewQuestion}>
          {this.state.currentQuestion[this.props.currentLanguage]}
        </Card>
      </div>
    )
  }

  /**
   * Sets the question text on the new card.
   */
  setNewQuestion = () => {

    // Sets the text of the new card.
    if (this.questions.length !== 0) {

      setTimeout(() => {
        let randomQuestion = this.getRandomQuestion();
        // Sets the current question.
        this.setState({
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

  getRandomQuestion = () => {
    let randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
    // Removes used question from the question pack.
    for (var i = this.questions.length - 1; i >= 0; i--) {
      if (this.questions[i] === randomQuestion) {
        var array = [...this.questions]; // make a separate copy of the array
        var index = array.indexOf(randomQuestion);
        if (index !== -1) {
          array.splice(index, 1);
          this.questions = array;
        }
        break;
      }
    }
    return randomQuestion;
  }
}
