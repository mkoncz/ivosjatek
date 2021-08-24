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
          title="Húzz egyet"
          desc="Húzz egyet és reménykedj"
          url="https://ivosjatek.hu/games/hu/huzz-egyet-remenykedj"
          imgPath="/img/games_page/card.jpg"
        />
        <DrinkingGameTemplate game="huzz-egyet-remenykedj" />
      </div>
    );
  }
}
