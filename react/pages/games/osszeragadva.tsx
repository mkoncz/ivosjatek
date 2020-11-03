// Import ReactJS module.
import React, {Component} from "react";

import Cookies from "universal-cookie";

import NavBar from "../../components/navbar/NavBar";
import CustomHead from "../../components/head/CustomHead";

import DrinkingGame from "../../components/drinking-games/DrinkingGame";

// Import i18n functions.
import { t, initLanguageCookie } from "../../i18n";

// Import game rules resource.
import * as drinking_objects_hu from "../../locales/drinking_games_hu.json"
import * as drinking_objects_en from "../../locales/drinking_games_en.json"

/**
 * The page contains a selected drinking game.
 */
export default class SelectedDrinkingGame extends Component {

  games: Object[];

  constructor(props) {
    super(props);
    initLanguageCookie();
    let cookies = new Cookies();
    this.games = cookies.get("lang") === "hu" ? drinking_objects_hu.all_games : drinking_objects_en.all_games;
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
  getAllThumbs = () => {
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
        <CustomHead
          title="Összeragadva"
          desc="Ez a játék szó szerint közelebb hoz titeket."
          url="https://ivosjatek.hu/games/osszeragadva"
          imgPath="/img/games_page/ragadva.jpg"
        />
        <NavBar />
        <div className="page-frame">
          {this.getCurrentGame("osszeragadva")}
          <h1>{t("nav.games")}</h1>
          {this.getAllThumbs()}
        </div>
      </div>
    );
  }
}