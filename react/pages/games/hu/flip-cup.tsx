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
          title="Flip cup"
          desc="A Flip Cup az egyik legjobb ivós játék kezdőknek. Két csapat versenyez egymással. A két csapat egymásnak ellentétes oldalon áll, és a poharakat az italokkal az asztal szélén tartja. Amelyik csapat előbb issza ki a poharak tartalmát és pöccinti fejtetőre a poharakat, az nyer."
          url="https://ivosjatek.hu/games/hu/flip-cup"
          imgPath="/img/games_page/pohar.jpg"
        />
        <DrinkingGameTemplate game="flip-cup" />
      </div>
    );
  }
}
