// Import ReactJS module.
import React, { Component } from "react";

// Import cards style classes.
import "./../../../css/pages/cards.css";

// Import question resources.
import * as questions from "../../../locales/questions.json"

/**
 * All cards listed.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language.
 * @param {function} props.reloadLanguage Changes the language of the page.
 */
export default class CardGroups extends Component {

  render() {

    let groups = {
      "outer_quality": this.props.i18n.t("cards.outer_quality"),
      "inner_quality": this.props.i18n.t("cards.inner_quality"),
      "outfit": this.props.i18n.t("cards.outfit"),
      "ownership": this.props.i18n.t("cards.ownership"),
      "habit": this.props.i18n.t("cards.habit"),
      "skill": this.props.i18n.t("cards.skill"),
      "relationship": this.props.i18n.t("cards.relationship"),
      "liked_thing": this.props.i18n.t("cards.liked_thing"),
      "opinion": this.props.i18n.t("cards.opinion"),
      "actual": this.props.i18n.t("cards.actual"),
      "current_game": this.props.i18n.t("cards.current_game"),
      "according_to_you": this.props.i18n.t("cards.according_to_you"),
      "have_you_ever": this.props.i18n.t("cards.have_you_ever"),
      "have_you_ever_18": this.props.i18n.t("cards.have_you_ever_18"),
      "nudes": this.props.i18n.t("cards.nudes"),
      "naked": this.props.i18n.t("cards.naked"),
      "boobs": this.props.i18n.t("cards.boobs"),
      "porn": this.props.i18n.t("cards.porn"),
      "sex_place": this.props.i18n.t("cards.sex_place"),
      "sex_partner": this.props.i18n.t("cards.sex_partner"),
      "give_name": this.props.i18n.t("cards.give_name"),
      "tell_a": this.props.i18n.t("cards.tell_a"),
      "do_or_drink": this.props.i18n.t("cards.do_or_drink"),
      "dare_or_drink": this.props.i18n.t("cards.dare_or_drink"),
      "dare_or_drink_18": this.props.i18n.t("cards.dare_or_drink_18"),
      "you_drink": this.props.i18n.t("cards.you_drink"),
      "rule": this.props.i18n.t("cards.rule"),
      "vote": this.props.i18n.t("cards.vote"),
      "fastest_one": this.props.i18n.t("cards.fastest_one")
    }

    let title;
    let group;
    for (var key in groups) {
      if (window.location.pathname.includes(key)) {
        group = key;
        title = groups[key];
      }
    };

    let filteredList = questions.default.filter((question) => {
      console.log(question.t)
      return question.t === group;
    })

    return (
      <div className="page-frame">

        {title != null ? (
          <div> <h2>{title}</h2>
            {filteredList.map((question, index) => {
              return (
                <div>
                  <div key={index} className="sponsor-card white-card">
                    <h4>{question[this.props.currentLanguage === "hu" ? "hu" : "en"].replace("%NAME%", this.props.i18n.t("game.player").toUpperCase())}</h4>
                  </div>
                </div>
              )
            })} </div>) : null}

        <h2 style={{ clear: "both", paddingTop: "40px" }}>{this.props.i18n.t("cards.categories")}</h2>
        <a href="/cards/outer_quality">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.outer_quality")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/inner_quality">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.inner_quality")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/outfit">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.outfit")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/ownership">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.ownership")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/habit">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.habit")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/skill">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.skill")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/liked_thing">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.liked_thing")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/relationship">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.relationship")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/opinion">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.opinion")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/actual">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.actual")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/current_game">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.current_game")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/according_to_you">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.according_to_you")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/have_you_ever">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.have_you_ever")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/have_you_ever_18">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.have_you_ever_18")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/nudes">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.nudes")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/naked">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.naked")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/boobs">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.boobs")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/porn">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.porn")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/sex_place">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.sex_place")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/sex_partner">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.sex_partner")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/give_name">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.give_name")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/tell_a">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.tell_a")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/do_or_drink">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.do_or_drink")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/dare_or_drink">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.dare_or_drink")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/dare_or_drink_18">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.dare_or_drink_18")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/you_drink">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.you_drink")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/rule">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.rule")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/vote">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.vote")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/fastest_one">
          <div className="sponsor-card white-card">
            <h4>"{this.props.i18n.t("cards.fastest_one")}" {this.props.i18n.t("cards.cards")}</h4>
          </div>
        </a>
      </div>
    );
  }
}