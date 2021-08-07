// Import React modules.
import React, { Component } from "react";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

// Interface for state.
interface WelcomeState {
  activeFrame: string, // category of question
}

/**
 * Welcome page.
 */
export default class Welcome extends Component<{}, WelcomeState> {

  constructor(props) {
    super(props);
    initLanguageCookie();
    this.state = {
      activeFrame: "welcome"
    };
  }

  selectMode = () => {
    this.setState({
      activeFrame: "modes"
    });
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
              <div className="menu-items menu-item-1">
                <h1 className="welcome">{t("welcome.online_game")}</h1>
              </div>
            </a>
          </div>
          <div className="welcome">
            <a href="/game-light">
              <div className="menu-items menu-item-2">
                <h2 className="welcome">{t("welcome.light_cards")}</h2>
              </div>
            </a>
          </div>
          <div className="welcome">
            <a href="/games">
              <div className="menu-items menu-item-3">
                <h3 className="welcome">{t("welcome.other_games")}</h3>
              </div>
            </a>
          </div>
        </div>
        <div className="p-container">
          <p className="welcome">{t("welcome.creator_support")} {t("welcome.help")}: &nbsp; <a href={t("welcome.help_url")}> {t("welcome.help_title")}</a> </p>
        </div>
      </div>
    );
  }
}