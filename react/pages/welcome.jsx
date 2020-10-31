// Import React modules.
import React, { Component } from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "./../components/navbar/NavBar";
import CustomHead from "./../components/head/CustomHead";

// Import translate function.
import { t } from "./../i18n";

/**
 * Welcome page.
 */
export default class Welcome extends Component {

  constructor() {
    super();
    this.cookies = new Cookies();
    if (this.cookies.get("lang") == null) {
      this.cookies.set("lang", "hu");
    }
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
                  <h1>{t("welcome.online_game")}</h1>
                  <h4>{t("welcome.online_game_desc")}</h4>
                </div>
              </div>
            </a>
            <a href="/games">
              <div className="half-block lower-block">
                <div className="welcome-text-block ">
                  <h1>{t("welcome.other_games")}</h1>
                  <h4>{t("welcome.other_games_desc")}</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}