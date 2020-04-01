// ReactJS modules.
import React, { Component } from 'react'
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

// Import the local components.
import NavBar from './NavBar';
import Contact from './Contact';
import Releases from './Releases';
import Rules from './Rules';
import Game from './Game';

// Import the internationalization module.
import i18n from "./i18n";

/**
 * The main container of the page.
 */
export default class MainContainer extends Component {

  constructor(){
    super();
    // The default language is Hungarian.
    this.state = {
      currentLang: 'hu'
    };
  }

  render() {
    return (
        <HashRouter>
          <div className="MainContainer">
            <NavBar 
              i18n={i18n} 
              reloadLanguage={this.reloadLanguage}
              currentLang={this.state.currentLang}
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
                currentLang={this.state.currentLang}
              />
            </Route>
            <Route path="/releases">
              <Releases 
                i18n={i18n} 
                currentLang={this.state.currentLang}
              />
            </Route>
            <Route path="/">
              <Game 
                i18n={i18n} 
                currentLang={this.state.currentLang}
              />
            </Route>
          </Switch>
        </HashRouter>
    );
  }

  // Change the language of the page.
  // The function is triggered by child components via props.
  reloadLanguage = (lang) => {
    // Change the selected language in the i18n module.
    i18n.changeLanguage(lang);
    // Change the current language triggers the uploading of child components.
    this.setState({
      currentLang: lang
    });
  }
}
