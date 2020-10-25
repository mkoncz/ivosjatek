// Import ReactJS module.
import React, { Component } from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

import NavBar from "./../components/navbar/NavBar";
import { t } from "../i18n";


export default class Welcome extends Component {

  constructor(){
    super();
    this.cookies = new Cookies();
    if (this.cookies.get("lang")==null) {
      this.cookies.set("lang", "hu");
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-frame">
          <div class="welcome">
            <a href="/game">
              <div class="half-block upper-block">
                <div class="welcome-text-block ">
                  <h1>{t("welcome.online_game")}</h1>
                  <h4>{t("welcome.online_game_desc")}</h4>
                </div>
              </div>
            </a>
            <a href="/games">
              <div class="half-block lower-block">
                <div class="welcome-text-block ">
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
