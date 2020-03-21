import React, { Component } from 'react'

import * as hun_data from '../locales/questions_hu.json'
import * as en_data from '../locales/questions_en.json'

import card from './../img/cocktail.png';

import './../css/style.css';
import './../css/animate.css';


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

  // set the text of the first car after the questions are loaded
  componentDidUpdate() {

    if (this.state.currentQuestion === '') {
      this.setNewQuestion();
    }

    if(this.props.currentLang!==this.state.currentLanguage){

      let allQuestions = [];

      let questionResource;

      if (hun_data != null && hun_data.questions != null && this.props.currentLang === 'hu') {
        questionResource = hun_data.questions
      } else if (en_data != null && en_data.questions != null && this.props.currentLang === 'en') {
        questionResource = en_data.questions
      } else {
        alert(this.props.i18n.t('game.no_more_question'));
        return;
      }

      const categories = Object.keys(questionResource)
      for (const category of categories) {
        for (const question of questionResource[category]) {
          allQuestions.push(question);
        }
      }

      this.setState({
        questions: allQuestions,
        currentLanguage: this.props.currentLang
      },
        () => {
          this.setNewQuestion();
          this.replaceCard();
        }
      );

      
    }
    
  }

  componentDidMount() {



    let allQuestions = [];

    let questionResource;

    if (hun_data != null && hun_data.questions != null && this.props.currentLang === 'hu') {
      questionResource = hun_data.questions
    } else if (en_data != null && en_data.questions != null && this.props.currentLang === 'en') {
      questionResource = en_data.questions
    } else {
      alert(this.props.i18n.t('game.no_more_question'));
      return;
    }

    const categories = Object.keys(questionResource)
    for (const category of categories) {
      for (const question of questionResource[category]) {
        allQuestions.push(question);
      }
    }

    this.setState({
      questions: allQuestions,
      currentLanguage: this.props.currentLang
    });

  }

  render() {

    const i18n = this.props.i18n;
    const left_cards = this.state.questions.length;

    return (
      <div align="center" width="100%">
        <div className="left-card-label"> {i18n.t("game.card_left").replace('%NUMBER%', left_cards)} </div>
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

  replaceCard = (flip) => {

    let that = this;

    // bounce out current card
    setTimeout(function () {
      that.setState({
        flipClasses: "flip-container animated bounceOutRight"
      });
    }, 25);

    // bounce in new card
    setTimeout(function () {
      that.setState({
        flipClasses: "flip-container animated bounceInLeft"
      });
    }, 500);

    // set the text of the new card
    if (this.state.questions.length !== 0) {
      this.setNewQuestion();
    } else {
      this.setState({
        currentQuestion: this.props.i18n.t('game.no_more_question')
      });
    }

  };

  cardClickHandler = () => {
    this.setState({
      flipClasses: "flip-container active",
    });
  }

  setNewQuestion = () => {
    let that = this;
    let randomQuestion = this.state.questions[Math.floor(Math.random() * this.state.questions.length)];

    setTimeout(function () {
      for (var i = that.state.questions.length - 1; i >= 0; i--) {
        if (that.state.questions[i] === that.state.currentQuestion) {
          var array = [...that.state.questions]; // make a separate copy of the array
          var index = array.indexOf(that.state.currentQuestion)
          if (index !== -1) {
            array.splice(index, 1);
            that.setState({ questions: array });
          }
        }
      }
      that.setState({
        currentQuestion: randomQuestion
      });
    }, 500);
  }
}
