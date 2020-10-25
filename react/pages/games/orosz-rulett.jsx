// Import ReactJS module.
import React from "react";

import NavBar from "../../components/navbar/NavBar";
import Cookies from "universal-cookie";

import DrinkingGame from "../../components/drinking-games/DrinkingGame";

// Import game content
import * as drinking_objects_hu from "../../locales/drinking_games_hu.json"
import * as drinking_objects_en from "../../locales/drinking_games_en.json"

import { t } from "../../i18n";


/**
 * The page contains the list of posts.
 */
export default class DrinkingGames extends React.Component {

  constructor() {
    super();
    this.cookies = new Cookies();
    this.games = this.cookies.get("lang") === "hu" ? drinking_objects_hu.default.all_games : drinking_objects_en.default.all_games;
  }

  // Returns the opened game.
  getCurrentGame = (game) => {
    let post = null;
    this.games.forEach(element => {
      if (element[0].type === 'meta') {
        if (game.includes(element[0].slug)) {
          post = <div key={element[0].slug}>
            <DrinkingGame
              postObjects={element}>
            </DrinkingGame>
          </div>
        }
      }
    });
    return post;
  }

  // Returns the thumbnail and title of all games.
  getAllThumbs = (games) => {
    return this.games.map(element => {
      return (
        <div key={element[0].slug} className="game-thumbnail-container">
          <a href={`/games/${element[0].slug}`}>
            <img src={`/img/games_page/${element[0].img}`}
              className="game-thumbnail" alt={t("nav.games")} />
            <div className="game-title" >
              <h4>
                {element[0].title}
              </h4>
            </div>
          </a>
          <div className="post-separator"></div>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <div>
          <NavBar />
          <div className="page-frame">
            {this.getCurrentGame("orosz-rulett")}
            <h1>{t("nav.games")}</h1>
            {this.getAllThumbs()}
          </div>
        </div>
      </div>
    );
  }
}