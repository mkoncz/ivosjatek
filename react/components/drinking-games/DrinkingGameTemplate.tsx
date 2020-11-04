// Import ReactJS module.
import React, { Component } from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "../navbar/NavBar";
import CustomHead from "../head/CustomHead";
import SelectedDrinkingGame from "./SelectedDrinkingGame";

// Import i18n functions.
import { t, initLanguageCookie } from "../../i18n";

// Import game rules resource.
import * as drinking_objects_hu from "../../locales/drinking_games_hu.json"
import * as drinking_objects_en from "../../locales/drinking_games_en.json"

interface SiteElementModel {
  slug?: string; 
  type?: string; 
  url?: string; 
  text?: string; 
  img?: string; 
  desc?: string; 
  level?: number; 
}

interface DrinkingGameTemplateProps {
  game: string; 
}

/**
 * The page contains a selected drinking game.
 */
export default class DrinkingGameTemplate extends Component<DrinkingGameTemplateProps,{}> {

  games: any[][];

  constructor(props) {
    super(props);
    initLanguageCookie();
    let cookies = new Cookies();
    this.games = cookies.get("lang") === "hu" ? drinking_objects_hu.all_games : drinking_objects_en.all_games;
  }

  // Returns the opened game.
  getCurrentGame = () => {
    let post = null;
    this.games.forEach((element: SiteElementModel[]) => {
      if (element[0].type === 'meta') {
        if (this.props.game.includes(element[0].slug)) {
          post = <div key={element[0].slug}>
            <SelectedDrinkingGame
              siteElements={element}/>
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
        <div>
          <CustomHead
            title="Bumm"
            desc="Az egyik legegyszerűbb ivós játék. Minden játékos mond egy számot hangosan, sorban, 1-től kezdve, kivéve a 7-et, annak többszöröseit és amiben benne van a szám (pl. 17). Ebben az esetben azt mondja: bumm. Aki elhibázza, iszik. Ilyen egyszerű."
            url="https://ivosjatek.hu/games/bumm"
            imgPath="/img/games_page/het.jpg"
          />
          <NavBar />
          <div className="page-frame">
            {this.getCurrentGame()}
            <h1>{t("nav.games")}</h1>
            {this.getAllThumbs()}
          </div>
        </div>
      </div>
    );
  }
}