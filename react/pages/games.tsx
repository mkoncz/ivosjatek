// Import ReactJS module.
import React from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

// Import game content.
import * as drinking_objects from "../locales/drinking_games.json";

/**
 * The page contains the list of drinking games.
 */
export default class DrinkingGames extends React.Component {

  games: any[][];
  localized_games: any[][];

  constructor(props) {
    super(props);
    initLanguageCookie();
    let cookies = new Cookies();
    this.games = drinking_objects.all_games;
    this.localized_games = this.games.filter(game => game[0].slug === cookies.get("lang"));
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
          url={"https://ivosjatek.hu/games"}
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