// Import ReactJS module.
import React, { Component } from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import i18n functions.
import { t, initLanguageCookie } from "../../i18n";

// Import game rules resource.
import drinking_objects from "../../locales/drinking_games.json"


/**
 * The page contains a selected drinking game.
 */
export default class AllDrinkingGameThumbnails extends Component {

  games: any[][];
  localized_games: any[][];
  cookies = new Cookies()

  constructor(props) {
    super(props);
    initLanguageCookie();
    this.games = drinking_objects.all_games;
    this.localized_games = this.games.filter(game => game[0].lang === this.cookies.get("lang"));
  }

  // Returns the thumbnail and title of all games.
  getAllThumbs = () => {
    return this.localized_games.map(element => {
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
        {this.getAllThumbs()}
      </div>
    );
  }

}
