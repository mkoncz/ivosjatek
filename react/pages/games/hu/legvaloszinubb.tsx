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
          title="Legvalószínűbb"
          desc="A játékosok körben ülnek és feltesznek egy 'legvalószínűbb' kérdést."
          url="https://ivosjatek.hu/games/hu/legvaloszinubb"
          imgPath="/img/games_page/percent.jpg"
        />
        <DrinkingGameTemplate game="legvaloszinubb" />
      </div>
    );
  }
}
