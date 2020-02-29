import React from 'react';
import NavBar from './NavBar';
import Credits from './Credits';
import Rules from './Rules';
import Game from './Game';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

function MainContainer() {
  return (
    <HashRouter>
      <div className="MainContainer">
        <NavBar />
      </div>
      <Switch>
        <Route path="/szabalyzat">
          <Rules />
        </Route>
        <Route path="/keszito">
          <Credits />
        </Route>
        <Route path="/">
          <Game />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default MainContainer;
