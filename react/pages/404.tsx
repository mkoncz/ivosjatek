// Import ReactJS module.
import React, { Component } from "react";

// Import Next modules.
import Link from "next/link";

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
          <div className="main-404-block">
            <h1 className="main-404-block__centered-title">404</h1>
            <h2 className="main-404-block__centered-link">
              <Link href="/">
                <a>{t("404")}</a>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
