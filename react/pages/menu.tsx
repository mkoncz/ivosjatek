// Import React modules.
import React, { Component } from "react";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * Menu page.
 */
export default class Menu extends Component {

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
          <div className="menu-item-container">
            <a href="/game">
              <div className="menu-item-container__menu-item menu-item-container__menu-item--1">
                <h1>{t("menu.online_game")}</h1>
              </div>
            </a>
            <a href="/game-light">
              <div className="menu-item-container__menu-item menu-item-container__menu-item--2">
                <h2>{t("menu.light_cards")}</h2>
              </div>
            </a>
            <a href="/games">
              <div className="menu-item-container__menu-item menu-item-container__menu-item--3">
                <h3>{t("menu.other_games")}</h3>
              </div>
            </a>
            <a href="/sponsors">
              <div className="menu-item-container__menu-item menu-item-container__menu-item--4">
                <h4>{t("menu.sponsors")}</h4>
              </div>
            </a>
            <a href="/sources">
              <div className="menu-item-container__menu-item menu-item-container__menu-item--5">
                <h4>{t("menu.sources")}</h4>
              </div>
            </a>
            <a href="/rules">
              <div className="menu-item-container__menu-item menu-item-container__menu-item--6">
                <h4>{t("menu.rules")}</h4>
              </div>
            </a>
            <a href="/contact">
              <div className="menu-item-container__menu-item menu-item-container__menu-item--7">
                <h4>{t("menu.contact")}</h4>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-container">
          <p className="footer-container__floating-label">&nbsp; {t("menu.creator_support")} {t("menu.help")}: <a href={t("menu.help_url")}> {t("menu.help_title")}</a> &nbsp; </p>
        </div>
      </div>
    );
  }
}