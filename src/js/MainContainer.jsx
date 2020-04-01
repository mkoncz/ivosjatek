// ReactJS modules.
import React, { Component } from 'react'
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

// IvosJatek React component
import NavBar from './NavBar';
import Contact from './Contact';
import Releases from './Releases';
import Rules from './Rules';
import Game from './Game';

// internationalization
import i18n from "./i18n";


export default class MainContainer extends Component {

  constructor(){
    super();
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
            <Route path="/szabalyzat"> 
              <Rules  
                i18n={i18n} 
              />
            </Route>
            <Route path="/kapcsolat">
              <Contact 
                i18n={i18n} 
                currentLang={this.state.currentLang}
              />
            </Route>
            <Route path="/frissitesek">
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

  // triggered by child components via props
  reloadLanguage = (lang) => {
    // changes the selected language in the i18n module
    i18n.changeLanguage(lang);
    // changing the current language triggers the uploading of child components
    this.setState({
      currentLang: lang
    });
  }
}
