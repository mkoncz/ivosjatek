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
          title="Kings Cup"
          desc="A Kings Cupot bármennyien játszhatjátok."
          url="https://ivosjatek.hu/games/hu/kings-cup"
          imgPath="/img/games_page/king.jpg"
        />
        <DrinkingGameTemplate game="kings-cup" />
      </div>
    );
  }
}
