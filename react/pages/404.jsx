// Import ReactJS module.
import React, { Component } from "react";

import { t } from "./../i18n";

import NavBar from "./../components/navbar/NavBar";

/**
 * 404 page
 */
export default class Page404 extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-frame">
          <h1 className="center-404">404</h1>
          <h2 className="center-404"><a href="/">{t("404")}</a></h2>
        </div>
      </div>
    );
  }
}
