// Import ReactJS module.
import React, {Component} from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "./../../components/navbar/NavBar";
import CustomHead from "./../../components/head/CustomHead";
import DrinkingGame from "./../../components/drinking-games/DrinkingGame";

// Import translate function.
import { t } from "./../../i18n";

// Import game rules resource.
import * as drinking_objects_hu from "./../../locales/drinking_games_hu.json"
import * as drinking_objects_en from "./../../locales/drinking_games_en.json"

/**
 * The page contains a selected drinking game.
 */
export default class SelectedDrinkingGame extends Component {

  constructor() {
    super();
    this.cookies = new Cookies();
    if (this.cookies.get("lang") == null) {
      this.cookies.set("lang", "hu");
    }
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
          <CustomHead
            title="Halálkör"
            desc="Bizonyos laptípusoknál bizonyos csoportok isznak (pl. pirosnál a lapot húzó, hetesnél a férfiak, nyolcasnál a nők stb.). Kilencesnél egy szót kell bemondani, és mindenkinek kell rá mondani egy rímet. Aki nem tud, iszik."
            url={"https://ivosjatek.hu/halal-kor"}
           />
          <NavBar />
          <div className="page-frame">
            {this.getCurrentGame("halal-kor")}
            <h1>{t("nav.games")}</h1>
            {this.getAllThumbs()}
          </div>
        </div>
      </div>
    );
  }
}