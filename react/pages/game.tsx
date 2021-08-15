// Import ReactJS module.
import React, { Component } from "react";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t } from "../i18n";

// Import question resources.
import GameTemplate from "../components/game-page/GameTemplate";

/**
 * The online drinking game.
 */
export default class Game extends Component {
  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.game_title")}
          desc={t("desc.game")}
          url={"https://ivosjatek.hu/game"}
        />
        <NavBar />
        <GameTemplate light={false} />
      </div>
    );
  }
}
