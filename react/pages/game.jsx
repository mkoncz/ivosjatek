// Import React modules.
import React, { Component } from "react";
import Head from 'next/head';

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import local Card component.
import Card from "../components/game-page/Card";
import NavBar from "../components/navbar/NavBar";

// Import question resources.
import * as questions from "../locales/questions.json";
import { t } from "../i18n";


export default class Game extends Component {

  constructor() {
    super();
    this.cookies = new Cookies();
    if (this.cookies.get("lang")) {
      this.cookies.set("lang", "hu");
    }

    this.questions = questions.default;

    this.state = {
      currentQuestion: this.getRandomQuestion()
    };
  }

  render() {
    // Count the left cards.
    const number_of_left_cards = this.questions.length;

    return (
      <div>
        <Head>
          <title>{t("nav.game")} | {t("nav.title")}</title>
        </Head>
        <NavBar />
        <div align="center" className="page-frame game-view" width="100%">
          <h1 className="left-card-label animated fadeIn">
            {t("game.card_left").replace("%NUMBER%", number_of_left_cards)}
          </h1>
          <Card
            setNewQuestion={this.setNewQuestion}
            currentQuestionModel={this.state.currentQuestion}
          >
          </Card>
        </div>
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
        currentQuestion: t("game.no_more_question")
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
