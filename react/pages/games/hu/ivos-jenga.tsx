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
          title="Ivós jenga"
          desc="Próbálj meg kihúzni egyet és reménykedj."
          url="https://ivosjatek.hu/games/hu/ivos-jenga"
          imgPath="/img/games_page/jenga.jpg"
        />
        <DrinkingGameTemplate game="ivos-jenga" />
      </div>
    );
  }
}
