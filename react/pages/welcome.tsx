// Import React modules.
import React, { Component } from "react";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * Welcome page.
 */
export default class Welcome extends Component {

  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.home")}
          desc={t("desc.game")}
          url={"https://ivosjatek.hu"}
        />
        <NavBar />
        <div className="page-frame">
          <div className="welcome">
            <a href="/game">
              <div className="half-block upper-block">
                <div className="welcome-text-block ">
                  <h1 className="welcome">{t("welcome.online_game")}</h1>
                  <h2 className="welcome">{t("welcome.online_game_desc")}</h2>
                </div>
              </div>
            </a>
            <a href="/games">
              <div className="half-block lower-block">
                <div className="welcome-text-block ">
                  <h3 className="welcome">{t("welcome.other_games")}</h3>
                  <h4 className="welcome">{t("welcome.other_games_desc")}</h4>
                </div>
              </div>
            </a>
          </div>
          <h5 className="welcome">{t("welcome.creator_support")}</h5>
          <p className="welcome">{t("welcome.help")}: <a href={t("welcome.help_url")}> {t("welcome.help_title")}</a> </p>
        </div>
      </div>
    );
  }
}