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
          title="Never Have I Ever"
          desc="Never Have I Ever"
          url="https://ivosjatek.hu/games/en/never-have-i-ever"
          imgPath="/img/games_page/meg_soha.jpg"
        />
        <DrinkingGameTemplate game="never-have-i-ever" />
      </div>
    );
  }
}
