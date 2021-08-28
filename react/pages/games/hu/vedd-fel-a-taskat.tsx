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
          title="Vedd fel a táskát"
          desc="Ez egy nagyon szórakoztató játék, akár már ezen a hétvégén kipróbálhatjátok."
          url="https://ivosjatek.hu/games/hu/vedd-fel-a-taskat"
          imgPath="/img/games_page/taska.jpg"
        />
        <DrinkingGameTemplate game="vedd-fel-a-taskat" />
      </div>
    );
  }
}
