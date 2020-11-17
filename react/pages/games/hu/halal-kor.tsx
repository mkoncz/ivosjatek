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
            title="Halálkör"
            desc="Bizonyos laptípusoknál bizonyos csoportok isznak (pl. pirosnál a lapot húzó, hetesnél a férfiak, nyolcasnál a nők stb.). Kilencesnél egy szót kell bemondani, és mindenkinek kell rá mondani egy rímet. Aki nem tud, iszik."
            url="https://ivosjatek.hu/games/hu/halal-kor"
            imgPath="/img/games_page/halalkor.jpg"
           />
        <DrinkingGameTemplate
          game="halal-kor"
        />
      </div>
    );
  }
}