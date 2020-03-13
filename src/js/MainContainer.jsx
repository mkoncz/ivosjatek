import React, { Component } from 'react'
import NavBar from './NavBar';
import Credits from './Credits';
import Rules from './Rules';
import Game from './Game';
import i18n from "./i18n";

import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

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
                currentLang={this.state.currentLang}
              />
            </Route>
            <Route path="/keszito">
              <Credits 
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
  reloadLanguage = (lang) => {
    i18n.changeLanguage(lang);
    this.setState({
      currentLang: lang
    });
  }
}
