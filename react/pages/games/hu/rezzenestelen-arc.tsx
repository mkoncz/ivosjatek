// Import React modules.
import React, { Component } from "react";

// Import components.
import CustomHead from "../../../components/head/CustomHead";
import DrinkingGameTemplate from "../../../components/drinking-games/DrinkingGameTemplate";

// Import cookie initializer function.
import { initLanguageCookie } from "../../../i18n";

/**
 * The page contains a selected drinking game.
 */
export default class SelectedDrinkingGame extends Component {

  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        <CustomHead
          title="Rezzenéstelen arc"
          desc="Ami kell hozzá: italok, papír, toll"
          url="https://ivosjatek.hu/games/hu/rezzenestelen-arc"
          imgPath="/img/games_page/arc.jpg"
        />
        <DrinkingGameTemplate
          game="rezzenestelen-arc"
        />
      </div>
    );
  }
}