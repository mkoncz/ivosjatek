// Import ReactJS module.
import React, { Component } from "react";

/**
 * 404 page
 */
export default class Page404 extends Component {

  render() {
    return (
      <div className="page-frame">
        <h1 className="center-404">404</h1>
        <h2 className="center-404"><a href="/">{this.props.i18n.t("404")}</a></h2>
      </div>
    );
  }
}
