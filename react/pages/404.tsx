// Import ReactJS module.
import React, {Component} from "react";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * 404 page.
 */
export default class Page404 extends Component {

  constructor(props) {
    super(props);
    initLanguageCookie();
  }
  
  render() {
    return (
      <div>
        <CustomHead
          title={"404"}
          desc={t("404")}
          url={"https://ivosjatek.hu/404"}
        />
        <NavBar />
        <div className="page-frame">
          <h1 className="center-404">404</h1>
          <h2 className="center-404"><a href="/">{t("404")}</a></h2>
        </div>
      </div>
    );
  }
}
