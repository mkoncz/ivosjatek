// Import ReactJS module.
import React from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "./../components/navbar/NavBar";
import CustomHead from "./../components/head/CustomHead";

// Import translate function.
import { t } from "./../i18n";

// Import game content.
import * as drinking_objects_hu from "./../locales/drinking_games_hu.json";
import * as drinking_objects_en from "./../locales/drinking_games_en.json";

/**
 * The page contains the list of drinking games.
 */
export default class DrinkingGames extends React.Component {

  constructor() {
    super();
    this.cookies = new Cookies();
    if (this.cookies.get("lang") == null) {
      this.cookies.set("lang", "hu");
    }
    this.games = this.cookies.get("lang") === "hu" ? drinking_objects_hu.default.all_games : drinking_objects_en.default.all_games;
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
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.games")}
          desc={t("desc.game")}
          url={"https://ivosjatek.hu/game"}
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