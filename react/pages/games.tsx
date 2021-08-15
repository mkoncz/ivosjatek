// Import ReactJS module.
import React from "react";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";
import AllDrinkingGameThumbnails from "../components/drinking-games/AllDrinkingGameThumbnails";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * The page contains the list of drinking games.
 */
export default class DrinkingGames extends React.Component {
  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.games")}
          desc={t("desc.game")}
          url={"https://ivosjatek.hu/games"}
        />
        <NavBar />
        <div className="page-frame">
          <h1>{t("nav.games")}</h1>
          <AllDrinkingGameThumbnails />
        </div>
      </div>
    );
  }
}
