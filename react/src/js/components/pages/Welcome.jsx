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
                <h1>Online ivós játék</h1>
                <h4>Pörgesd fel a bulit egy izgalmas online kártyajátékkal</h4>
              </div>
            </div>
          </a>
          <a href="/games">
            <div class="half-block lower-block">
              <div class="welcome-text-block ">
                <h1>Egyéb ivós játékok</h1>
                <h4>A legjobb ivós játékok szabályai magyar kártya, francia kártya, jenga vagy csupán szavak segítségével</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
