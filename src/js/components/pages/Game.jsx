// Import React modules.
import React, { Component } from 'react'

// Import question resources.
import * as hun_question_resource from './../../../locales/questions_hu.json'
import * as en_question_resource from './../../../locales/questions_en.json'

// Import cocktail logo for the back page of the card.
import card from './../../../img/cocktail.png';

// Import custom styles.
import './../../../css/style.css';
// Import animation styles.
import './../../../css/animate.css';

/**
 * The page contains the contact e-mail address of the creator and the list of used sources.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language. Changing the currentLanguage property triggers an update at the language change.
 */
export default class Game extends Component {

  constructor() {
    super();
    this.state = {
      questions: [],
      flipClasses: 'flip-container',
      currentQuestion: '',
      currentLanguage: ''
    };
  }

  // Sets pack of the questions when page is opened.
  componentDidMount() {
    this.setLocalizedPack();
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
      <div align="center" className='page-frame' width="100%">
        <div className="left-card-label"> {i18n.t("game.card_left").replace('%NUMBER%', number_of_left_cards)} </div>
        <div id="lap1" className={this.state.flipClasses} align="center" onClick={this.cardClickHandler}>
          <div className="flipper" >
            <div className="back">
              <img className="back_img" src={card} height="100%" width="100%" alt='back' />
            </div>
            <div className="front">
              <div id="kerdes1" className="txt-question">  {this.state.currentQuestion} </div>
              <button className="btn btn-warning btn-lg btn-card" onClick={this.replaceCard}> {i18n.t("game.next")} </button>
            </div>
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
  replaceCard = () => {

    let that = this;

    // Bounces out the current card.
    if (this.state.currentQuestion !== '') {
      setTimeout(function () {
        that.setState({
          flipClasses: "flip-container animated bounceOutRight"
        });
      }, 25);
    } else {
      // The empty first card needs to be hidden.
      that.setState({
        flipClasses: "hidden"
      });
    }

    // Bounces in the new card.
    setTimeout(function () {
      that.setState({
        flipClasses: "flip-container animated bounceInLeft"
      });
    }, 450);

    // Sets the text of the new card.
    if (this.state.questions.length !== 0) {
      this.setNewQuestion();
    } else {
      // Notifies the user if the card pack is empty.
      this.setState({
        currentQuestion: this.props.i18n.t('game.no_more_question')
      });
    }
  };

  /**
   * Handles the click event on the unread cards.
   */
  cardClickHandler = () => {
    this.setState({
      flipClasses: "flip-container active",
    });
  }

  /**
   * Sets the question text on the new card.
   */
  setNewQuestion = () => {
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
  }

  /**
   * Sets the localized pack.
   */
  setLocalizedPack() {

    let allQuestions = [];

    let localizedPack;

    if (hun_question_resource != null && hun_question_resource.questions != null && this.props.currentLanguage === 'hu') {
      localizedPack = hun_question_resource.questions
    } else if (en_question_resource != null && en_question_resource.questions != null && this.props.currentLanguage === 'en') {
      localizedPack = en_question_resource.questions
    } else {
      alert(this.props.i18n.t('game.no_more_question'));
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
        this.replaceCard();
      }
    );
  }
}