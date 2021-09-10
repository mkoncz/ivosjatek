// Import React module.
import React, { Component } from "react";

// Import components.
import NavBar from "../navbar/NavBar";
import SelectedDrinkingGame from "./SelectedDrinkingGame";
import AllDrinkingGameThumbnails from "./AllDrinkingGameThumbnails";
import AdultConsent from "../../components/modal/AdultConsent";

// Import i18n functions.
import { cookies, initLanguageCookie } from "../../i18n";

// Import game rules resource.
import game_objects from "../../resources/drinking_games.json";

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
export default class DrinkingGameTemplate extends Component<
  DrinkingGameTemplateProps,
  {}
> {
  games: any[][];
  localized_games: any[][];

  constructor(props) {
    super(props);
    initLanguageCookie();
    this.games = game_objects.all_games;
    this.localized_games = this.games.filter(
      (game) => game[0].lang === cookies.get("lang")
    );
  }

  // Returns the opened game.
  getCurrentGame = () => {
    let post = null;
    this.games.forEach((element: SiteElementModel[]) => {
      // Do not render game if an other language is selected.
      if (cookies.get("lang") !== element[0].lang) {
        return "";
      }
      // Create component for the current game.
      if (element[0].type === "meta") {
        if (element[0].slug.includes(this.props.game)) {
          post = (
            <div key={element[0].slug} className="drinking-game__selected">
              <SelectedDrinkingGame siteElements={element} />
            </div>
          );
        }
      }
    });
    return post;
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="drinking-game page-frame">
          <AdultConsent />
          {this.getCurrentGame()}
          <AllDrinkingGameThumbnails />
        </div>
      </div>
    );
  }
}
