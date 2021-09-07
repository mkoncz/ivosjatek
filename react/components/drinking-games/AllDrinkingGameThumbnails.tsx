// Import ReactJS module.
import React, { Component } from "react";

// Import Next modules.
import Link from "next/link";

// Import cookie handling module.
import Cookies from "universal-cookie";

// Import i18n functions.
import { t, initLanguageCookie } from "../../i18n";

// Import game rules resource.
import drinking_objects from "../../locales/drinking_games.json";

/**
 * The page contains a selected drinking game.
 */
export default class AllDrinkingGameThumbnails extends Component {
  games: any[][];
  localized_games: any[][];
  cookies = new Cookies();

  constructor(props) {
    super(props);
    initLanguageCookie();
    this.games = drinking_objects.all_games;
    this.localized_games = this.games.filter(
      (game) => game[0].lang === this.cookies.get("lang")
    );
  }

  // Returns the thumbnail and title of all games.
  getAllThumbs = () => {
    return this.localized_games.map((element) => {
      return (
        <div key={element[0].slug} className="thumbnails__item">
          <Link href={`/games/${element[0].slug}`}>
            <a>
              <img
                src={`/img/games_page/${element[0].img}`}
                className="thumbnails__image"
                alt={t("nav.games")}
              />
              <h4 className="thumbnails__title">{element[0].title}</h4>
            </a>
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1 className="drinking-games__title">{t("nav.games")}</h1>
        <div className="thumbnails">{this.getAllThumbs()}</div>
      </div>
    );
  }
}
