import React, { Component } from 'react'

import * as data from './questions.json'

import card from './../img/cocktail.png'; 

import './../css/style.css';
import './../css/animate.css';


export default class Game extends Component {

  constructor() {
    super();
    this.state = {
      questions: [],
      flipClasses: "flip-container",
      currentQuestion: ""
    };

  }

  componentWillUpdate() {
    if(this.state.currentQuestion===""){
      this.setNewQuestion();
    }
  }

  componentDidMount() {

    let allQuestions = [];

    const categories = Object.keys(data.hun_data)
    for (const category of categories) {
      for (const question of data.hun_data[category]) {
        allQuestions.push(question);
      }
    }

    this.setState({
      questions: allQuestions
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
              <img className="back_img" src={card} height="100%" width="100%" alt='back'/>
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

  replaceCard = () => {

    let that = this;

    setTimeout(function () {
      that.setState({
        flipClasses: "flip-container active animated bounceOutRight"
      });
    }, 25);

    setTimeout(function () {
      that.setState({
        flipClasses: "flip-container animated bounceInLeft"
      });
    }, 500);

    if (this.state.questions.length !== 0) {
      this.setNewQuestion();
    } else {
      this.setState({
        currentQuestion: "Elfogytak a kérdések :("
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
