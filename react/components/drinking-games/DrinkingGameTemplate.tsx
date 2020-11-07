// Import ReactJS module.
import React, { Component } from "react";
import { NextPageContext } from 'next'

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "../navbar/NavBar";
import SelectedDrinkingGame from "./SelectedDrinkingGame";

// Import i18n functions.
import { t, initLanguageCookie } from "../../i18n";

// Import game rules resource.
import * as drinking_objects from "../../locales/drinking_games.json"

interface SiteElementModel {
  slug?: string;
  type?: string;
  url?: string;
  text?: string;
  img?: string;
  desc?: string;
  level?: number;
  lang?: string;
}

interface DrinkingGameTemplateProps {
  game: string;
}

/**
 * The page contains a selected drinking game.
 */
export default class DrinkingGameTemplate extends Component<DrinkingGameTemplateProps, {}> {

  games: any[][];
  localized_games: any[][];
  cookies = new Cookies()

  constructor(props) {
    super(props);
    initLanguageCookie();
    this.games = drinking_objects.all_games;
    this.localized_games = this.games.filter(game => game[0].lang === this.cookies.get("lang"));
  }

  // Returns the opened game.
  getCurrentGame = () => {
    let post = null;
    this.games.forEach((element: SiteElementModel[]) => {
      // Do not render game if an other language is selected.
      if(this.cookies.get("lang") !== element[0].lang ) {
        return "";
      }
      // Create component for the current game.
      if (element[0].type === 'meta') {
        if (element[0].slug.includes(this.props.game)) {
          post = <div key={element[0].slug}>
            <SelectedDrinkingGame
              siteElements={element} />
          </div>
        }
      }
    });
    return post;
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
        <NavBar />
        <div className="page-frame">
          {this.getCurrentGame()}
          <h1>{t("nav.games")}</h1>
          {this.getAllThumbs()}
        </div>
      </div>
    );
  }

}
