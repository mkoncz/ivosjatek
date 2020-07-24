// ReactJS modules.
import React, { Component } from "react"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// Import the local components.
import NavBar from "./NavBar";
import Contact from "./pages/Contact";
import Game from "./pages/game_page/Game";
import Releases from "./pages/Releases";
import Rules from "./pages/Rules";
import Sources from "./pages/sources_page/Sources";
import Sponsors from "./pages/sponsors_page/Sponsors";
import Page404 from "./pages/Page404";
import Posts from "./pages/posts/Posts";
import PostJuly from "./pages/posts/PostJuly";
import PostJuly2 from "./pages/posts/PostJuly2";

// Import module that redirects http requests to https.
import HttpsRedirect from "react-https-redirect";

// Import the internationalization module.
import i18n from "../i18n";

// Import modules for cookie handling.
import CookieConsent from "react-cookie-consent";
import Cookies from "universal-cookie";

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";


/**
 * The main container of the page.
 */
export default class MainContainer extends Component {

  constructor() {
    super();
    // Create cookies object.
    this.cookies = new Cookies();
    // The default language is Hungarian.
    this.state = {
      currentLanguage: null != this.cookies.get("lang") ? this.cookies.get("lang") : "hu"
    };
    // Activate the i18n language changer.
    if (null != this.cookies.get("lang")) {
      i18n.changeLanguage(this.cookies.get("lang"));
    }
  }

  render() {
    return (
      <HttpsRedirect>
        <BrowserRouter>
          <Helmet>
            <title>{i18n.t("nav.title")}</title>
          </Helmet>
          <div className="animated nav-bar">
            <NavBar
              i18n={i18n}
              reloadLanguage={this.reloadLanguage}
              currentLanguage={this.state.currentLanguage}
            />
          </div>
          <Switch>
            <Route path={["/rules", "/hu/rules"]}>
              <Rules
                i18n={i18n}
                currentLanguage={this.state.currentLanguage}
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path={["/contact", "/hu/contact"]}>
              <Contact
                i18n={i18n}
                currentLanguage={this.state.currentLanguage}
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path={["/releases", "/hu/releases"]}>
              <Releases
                i18n={i18n}
                currentLanguage={this.state.currentLanguage}
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path={["/sources", "/hu/sources"]}>
              <Sources
                i18n={i18n}
                currentLanguage={this.state.currentLanguage}
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path={["/sponsors", "/hu/sponsors"]}>
              <Sponsors
                i18n={i18n}
                currentLanguage={this.state.currentLanguage}
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path={["/rules", "/hu/rules"]}>
              <Rules
                i18n={i18n}
                currentLanguage={this.state.currentLanguage}
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path="/en/contact">
              <Contact
                i18n={i18n}
                currentLanguage="en"
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path="/en/releases">
              <Releases
                i18n={i18n}
                currentLanguage="en"
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path="/en/sources">
              <Sources
                i18n={i18n}
                currentLanguage="en"
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path="/en/sponsors">
              <Sponsors
                i18n={i18n}
                currentLanguage="en"
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path="/en">
              <Game
                i18n={i18n}
                currentLanguage="en"
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
            <Route path="/404">
              <Page404/>
            </Route>
            { /* SEO */}
            <Route path="/p/ketrecharcos-lesz-ukrajna-legnagyobb-mellu-noje">
              <PostJuly2 />
            </Route>
            <Route path="/p/felnottfilmes-keri-a-videoi-torleset">
              <PostJuly />
            </Route>
            <Route path="/p">
              <Posts
                i18n={i18n}
              />
            </Route>
            { /* END SEO */}
            <Route path={["/", "/hu"]}>
              <Game
                i18n={i18n}
                currentLanguage={this.state.currentLanguage}
                reloadLanguage={this.reloadLanguage}
              />
            </Route>
          </Switch>
          <CookieConsent
            location="bottom"
            buttonText={i18n.t("cookie.accept")}
            style={{ background: "#2B373B" }}
            buttonStyle={{ backgroundColor: "rgb(211, 244, 47)", fontSize: "13px" }}
            expires={150}
          >
            {i18n.t("cookie.question")}
          </CookieConsent>
        </BrowserRouter>
      </HttpsRedirect>
    );
  }

  /**
   * Changes the language of the page.
   * The function is triggered by child components via props.
   * @param {string} lang - Code of the new language.
   */
  reloadLanguage = (lang) => {
    // Change cookie value of language.
    this.cookies.set("lang", lang, { path: "/" });
    // Changes the selected language in the i18n module.
    i18n.changeLanguage(lang);
    // Change sthe current language triggers the uploading of child components.
    this.setState({
      currentLanguage: lang
    });
  }

}
