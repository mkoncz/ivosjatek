// Import React modules.
import React, { Component } from "react";

// Import Next modules.
import Link from "next/link";

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
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
          <div className="snowflake">▪</div>
        </div>
        <NavBar />
        <div className="page-frame">
          <div className="menu-item-container">
            <div className="menu-item-container__mobile-header show-only-mobile">
              <h1>{t("menu.header_1")}</h1>
              <h2>--- {t("menu.header_2")} ---</h2>
              <h3>{t("menu.header_3")}</h3>
            </div>
            <div className="show-only-mobile">
              <img src="/img/card_backs/wine.png" height="200" alt="bor" />
            </div>
            <Link href="/game">
              <a className="menu-item-container__menu-item menu-item-container__menu-item--1">
                <h1>{t("menu.online_game")}</h1>
              </a>
            </Link>
            <Link href="/games">
              <a className="menu-item-container__menu-item menu-item-container__menu-item--2">
                <h3>{t("menu.other_games")}</h3>
              </a>
            </Link>
            <Link href="/contact">
              <a className="menu-item-container__menu-item menu-item-container__menu-item--3">
                <h4>{t("menu.contact")}</h4>
              </a>
            </Link>
            <div className="show-only-desktop">
              <Link href="/game-light">
                <a className="menu-item-container__menu-item menu-item-container__menu-item--4">
                  <h2>{t("menu.light_cards")}</h2>
                </a>
              </Link>
              <Link href="/sponsors">
                <a className="menu-item-container__menu-item menu-item-container__menu-item--5">
                  <h4>{t("menu.sponsors")}</h4>
                </a>
              </Link>
              <Link href="/sources">
                <a className="menu-item-container__menu-item menu-item-container__menu-item--6">
                  <h4>{t("menu.sources")}</h4>
                </a>
              </Link>
              <Link href="/rules">
                <a className="menu-item-container__menu-item menu-item-container__menu-item--7">
                  <h4>{t("menu.rules")}</h4>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <p className="footer-container__floating-label">
            &nbsp; {t("menu.creator_support")} {t("menu.help")}:{" "}
            <Link href={t("menu.help_url")}>{t("menu.help_title")}</Link> &nbsp;{" "}
          </p>
        </div>
      </div>
    );
  }
}
