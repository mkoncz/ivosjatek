// Import ReactJS module.
import React, { Component } from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "../navbar/NavBar";
import SelectedDrinkingGame from "./SelectedDrinkingGame";
import AllDrinkingGameThumbnails from "./AllDrinkingGameThumbnails";
import AdultConsent from "../../components/modal/AdultConsent";

// Import i18n functions.
import { t, initLanguageCookie } from "../../i18n";

// Import game rules resource.
import * as drinking_objects from "../../locales/drinking_games.json"

// Interface for props.
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

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-frame">
          <AdultConsent/>
          {this.getCurrentGame()}
          <h1>{t("nav.games")}</h1>
          <AllDrinkingGameThumbnails/>
        </div>
      </div>
    );
  }

}
