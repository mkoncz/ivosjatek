import React, { Component } from 'react'

import * as hun_question_resource from '../locales/questions_hu.json'
import * as en_question_resource from '../locales/questions_en.json'

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

  componentDidUpdate() {

    //if the language is changed
    if(this.props.currentLang!==this.state.currentLanguage){
      this.setLocalizedPack();
    }
    
  }

  componentDidMount() {

    this.setLocalizedPack();

  }

  render() {

    const i18n = this.props.i18n;
    const number_of_left_cards = this.state.questions.length;

    return (
      <div align="center" width="100%">
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

  setLocalizedPack(){

    let allQuestions = [];

    let localizedPack;

    if (hun_question_resource != null && hun_question_resource.questions != null && this.props.currentLang === 'hu') {
      localizedPack = hun_question_resource.questions
    } else if (en_question_resource != null && en_question_resource.questions != null && this.props.currentLang === 'en') {
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
      currentLanguage: this.props.currentLang
    },
      () => {
        this.setNewQuestion();
        this.replaceCard();
      }
    );
  }
}
