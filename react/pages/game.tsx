// Import ReactJS module.
import React, {Component} from "react";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";
import Card from "../components/game-page/Card";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

// Import question resources.
import * as questions from "../locales/questions.json";

// Interface for  state.
interface QuestionModel {
  t: string, // type
  hu: string, // Hungarian question
  en: string, // English version of question
  im: string // image keyword (logo)
}

interface GameState {
  currentQuestion?: QuestionModel;
}

/**
 * The online drinking game.
 */
export default class Game extends Component<{},GameState> {

  questions: QuestionModel[];

  constructor(props) {
    super(props);
    initLanguageCookie();

    this.questions = questions['default'];

    this.state = {
      currentQuestion: this.getRandomQuestion()
    };
  }

  render() {
    // Count the left cards.
    let number_of_left_cards: string = this.questions.length + "";

    return (
      <div>
        <CustomHead
          title={t("nav.game")}
          desc={t("desc.game")}
          url={"https://ivosjatek.hu/game"}
        />  
        <NavBar />
        <div className="page-frame game-view" >
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
        currentQuestion: this.getNoQuestionObject()
      });
    }
  }

  getRandomQuestion = () => {
    const randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
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

  getNoQuestionObject = () => {
    return {
      hu: t("game.no_more_question"),
      en: t("game.no_more_question"),
      im: null,
      t: null
    };
  }

}
