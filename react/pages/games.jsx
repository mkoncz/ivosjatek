// Import ReactJS module.
import React from "react";

import Cookies from "universal-cookie";

// Import game content
import * as drinking_objects_hu from "../locales/drinking_games_hu.json";
import * as drinking_objects_en from "../locales/drinking_games_en.json";

import NavBar from "./../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

import { t } from "./../i18n";


/**
 * The page contains the list of posts.
 */
export default class DrinkingGames extends React.Component {

  constructor() {
    super();
    this.cookies = new Cookies();
    if (this.cookies.get("lang") == null) {
      this.cookies.set("lang", "hu");
    }
    this.games = this.cookies.get("lang") === "hu" ? drinking_objects_hu.default.all_games : drinking_objects_en.default.all_games;
    for (var i = this.games.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.games[i];
      this.games[i] = this.games[j];
      this.games[j] = temp;
    }
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
          title={t("nav.home")}
          desc={t("desc.game")}
        />
        <NavBar />
        <div className="page-frame">
          <h1>{t("nav.games")}</h1>
          {this.getAllThumbs()}
        </div>
      </div>
    );
  }
}