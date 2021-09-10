// Import ReactJS module.
import React, { Component } from "react";

// Import Next modules.
import Link from "next/link";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import cookie handling module.
import Cookies from "universal-cookie";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * The page contains the cookie information.
 */
export default class CookiePage extends Component {
  cookies = new Cookies();

  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.cookies")}
          desc={t("desc.cookies")}
          url={"https://ivosjatek.hu/contact"}
        />
        <NavBar />
        <div className="page-frame">
          <h1>{t("cookies.title")}</h1>
          <table>
            <tbody>
              <tr>
                <td>{t("cookies.allow")}</td>
                <td>
                  {this.cookies.get("allowCookies") === "true"
                    ? t("cookies.yes")
                    : t("cookies.no")}
                </td>
              </tr>
              <tr>
                <td>{t("cookies.lang")}</td>
                <td>{this.cookies.get("lang")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
