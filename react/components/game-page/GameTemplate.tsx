// Import ReactJS module.
import React, { Component } from "react";

// Import components.
import Card from "../game-page/Card";

// Import i18n functions.
import { t, initLanguageCookie } from "../../i18n";

// Import question resources.
import * as questions from "../../locales/questions.json";

// Interface for state.
interface QuestionModel {
  type: string; // category of question
  hu: string; // Hungarian question
  en: string; // English version of question
  im: string; // image keyword (logo)
  adult: string; // is adult question
}

interface GameState {
  currentQuestion?: QuestionModel;
}

interface GameProps {
  light: boolean;
}

/**
 * The online drinking game.
 */
export default class GameTemplate extends Component<GameProps, GameState> {
  questions: QuestionModel[];
  filtered_questions: QuestionModel[];

  constructor(props) {
    super(props);
    initLanguageCookie();

    this.questions = questions["default"];
    this.filtered_questions = this.props.light
      ? this.questions.filter((question) => question.adult !== "x")
      : this.questions;

    this.state = {
      currentQuestion: this.getRandomQuestion(),
    };
  }

  render() {
    // Counts the left cards.
    let number_of_left_cards: string = this.filtered_questions.length + "";

    return (
      <div>
        <div className="page-frame game-view">
          <h1 className="left-card-label animated fadeIn">
            {t("game.card_left").replace("%NUMBER%", number_of_left_cards)}
          </h1>
          <Card
            setNewQuestion={this.setNewQuestion}
            currentQuestionModel={this.state.currentQuestion}
          ></Card>
        </div>
      </div>
    );
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
          currentQuestion: randomQuestion,
        });
      }, 500);
    } else {
      // Notifies the user if the card pack is empty.
      this.setState({
        currentQuestion: this.getNoQuestionObject(),
      });
    }
  };

  getRandomQuestion = () => {
    const randomQuestion =
      this.filtered_questions[
        Math.floor(Math.random() * this.filtered_questions.length)
      ];
    // Removes used question from the question pack.
    for (var i = this.filtered_questions.length - 1; i >= 0; i--) {
      if (this.filtered_questions[i] === randomQuestion) {
        var array = [...this.filtered_questions]; // make a separate copy of the array
        var index = array.indexOf(randomQuestion);
        if (index !== -1) {
          array.splice(index, 1);
          this.filtered_questions = array;
        }
        break;
      }
    }
    return randomQuestion;
  };

  getNoQuestionObject = () => {
    return {
      hu: t("game.no_more_question"),
      en: t("game.no_more_question"),
      im: null,
      type: null,
      adult: null,
    };
  };
}
