// ReactJS modules.
import React, { Component } from "react"
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

// Import the local components.
import NavBar from "./NavBar";
import Contact from "./pages/Contact";
import Game from "./pages/game_page/Game";
import Releases from "./pages/Releases";
import Rules from "./pages/Rules";
import Sources from "./pages/sources_page/Sources";

// Import the internationalization module.
import i18n from "../i18n";

/**
 * The main container of the page.
 */
export default class MainContainer extends Component {

  constructor() {
    super();
    // The default language is Hungarian.
    this.state = {
      currentLanguage: ""
    };
  }

  render() {
    return (
      <HashRouter>
        <div className={this.state.currentLanguage === "" ? " hidden" : " animated fadeIn"}>
          <NavBar
            i18n={i18n}
            reloadLanguage={this.reloadLanguage}
            currentLanguage={this.state.currentLanguage}
            selectEnglish={this.selectEnglish}
            selectHungarian={this.selectHungarian}
          />
        </div>
        <Switch>
          <Route path="/rules">
            <Rules
              i18n={i18n}
            />
          </Route>
          <Route path="/contact">
            <Contact
              i18n={i18n}
              currentLanguage={this.state.currentLanguage}
            />
          </Route>
          <Route path="/releases">
            <Releases
              i18n={i18n}
              currentLanguage={this.state.currentLanguage}
            />
          </Route>
          <Route path="/sources">
            <Sources
              i18n={i18n}
              currentLanguage={this.state.currentLanguage}
            />
          </Route>
          <Route path="/">
            <Game
              i18n={i18n}
              currentLanguage={this.state.currentLanguage}
              selectEnglish={this.selectEnglish}
              selectHungarian={this.selectHungarian}
            />
          </Route>
        </Switch>
      </HashRouter>
    );
  }

  /**
   * Changes the language of the page.
   * The function is triggered by child components via props.
   * @param {string} lang - Code of the new language.
   */
  reloadLanguage = (lang) => {
    // Changes the selected language in the i18n module.
    i18n.changeLanguage(lang);
    // Change sthe current language triggers the uploading of child components.
    this.setState({
      currentLanguage: lang
    });
  }

  /**
   * Sets the selected language to English.
   */
  selectEnglish = () => {
    this.reloadLanguage("en");
  }

  /**
   * Sets the selected language to Hungarian.
   */
  selectHungarian = () => {
    this.reloadLanguage("hu");
  }
}
