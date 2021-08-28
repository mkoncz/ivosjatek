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
          title="Bumm"
          desc="Az egyik legegyszerűbb ivós játék. Minden játékos mond egy számot hangosan, sorban, 1-től kezdve, kivéve a 7-et, annak többszöröseit és amiben benne van a szám (pl. 17). Ebben az esetben azt mondja: bumm. Aki elhibázza, iszik. Ilyen egyszerű."
          url="https://ivosjatek.hu/games/hu/bumm"
          imgPath="/img/games_page/het.jpg"
        />
        <DrinkingGameTemplate game="bumm" />
      </div>
    );
  }
}
