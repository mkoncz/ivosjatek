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
          title="T-REX"
          desc="Egy egész éjszakán át tartó, nagyon idegesítő játék"
          url="https://ivosjatek.hu/games/t-rex"
          imgPath="/img/games_page/trex.jpg"
        />
        <DrinkingGameTemplate
          game="t-rex"
        />
      </div>
    );
  }
}