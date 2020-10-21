// Import ReactJS module.
import React, { Component } from "react";

// Import page specific style classes.
import "./../../../css/pages/welcome.css";

/**
 * Welcome page
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language.
 * @param {function} props.reloadLanguage Changes the language of the page.
 */


export default class Welcome extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.reloadLanguage(this.props.currentLanguage);
  }

  render() {
    return (
      <div className="page-frame">
        <div class="welcome">
          <a href="/game">
            <div class="half-block upper-block">
              <div class="welcome-text-block ">
                <h1>{this.props.i18n.t("welcome.online_game")}</h1>
                <h4>{this.props.i18n.t("welcome.online_game_desc")}</h4>
              </div>
            </div>
          </a>
          <a href="/games">
            <div class="half-block lower-block">
              <div class="welcome-text-block ">
                <h1>{this.props.i18n.t("welcome.other_games")}</h1>
                <h4>{this.props.i18n.t("welcome.other_games_desc")}</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
