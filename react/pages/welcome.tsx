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
    this.state = {
      activeFrame: "welcome"
    };
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
          <div className="menu-item-container">
            <a href="/game">
              <div className="menu-item menu-item-1">
                <h1>{t("welcome.online_game")}</h1>
              </div>
            </a>
          </div>
          <div className="menu-item-container">
            <a href="/game-light">
              <div className="menu-item menu-item-2">
                <h2>{t("welcome.light_cards")}</h2>
              </div>
            </a>
          </div>
          <div className="menu-item-container">
            <a href="/games">
              <div className="menu-item menu-item-3">
                <h3>{t("welcome.other_games")}</h3>
              </div>
            </a>
          </div>
          <div className="menu-item-container">
            <a href="/contact">
              <div className="menu-item menu-item-4">
                <h4>{t("welcome.sponsors")}</h4>
              </div>
            </a>
          </div>
          <div className="menu-item-container">
            <a href="/contact">
              <div className="menu-item menu-item-5">
                <h4>{t("welcome.sources")}</h4>
              </div>
            </a>
          </div>
          <div className="menu-item-container">
            <a href="/contact">
              <div className="menu-item menu-item-6">
                <h4>{t("welcome.release_notes")}</h4>
              </div>
            </a>
          </div>
          <div className="menu-item-container">
            <a href="/contact">
              <div className="menu-item menu-item-7">
                <h4>{t("welcome.contact")}</h4>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-container">
          <p className="footer">&nbsp; {t("welcome.creator_support")} {t("welcome.help")}: <a href={t("welcome.help_url")}> {t("welcome.help_title")}</a> &nbsp; </p>
        </div>
      </div>
    );
  }
}