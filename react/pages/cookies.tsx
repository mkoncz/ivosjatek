// Import ReactJS module.
import React, { Component } from "react";

// Import Next modules.
import Link from "next/link";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie, cookies } from "../i18n";

/**
 * The page contains the cookie information.
 */
export default class CookiePage extends Component {
  constructor(props) {
    super(props);
    initLanguageCookie();
    cookies.addChangeListener(() => {
      this.forceUpdate();
    });
  }

  deleteCookies = () => {
    cookies.set("allowCookies", "", {
      path: "/",
      secure: true,
      expires: new Date(),
    });
    cookies.set("lang", "", {
      path: "/",
      secure: true,
      expires: new Date(),
    });
  };

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.cookies")}
          desc={t("desc.cookies")}
          url={"https://ivosjatek.hu/contact"}
        />
        <NavBar />
        <div className="cookies page-frame">
          <h1>{t("cookies.title")}</h1>
          <table>
            <tbody>
              <tr>
                <td>{t("cookies.allow")}</td>
                <td>
                  {cookies.get("allowCookies") === "true"
                    ? t("cookies.yes")
                    : t("cookies.no")}
                </td>
              </tr>
              <tr>
                <td>{t("cookies.lang")}</td>
                <td>{cookies.get("lang")}</td>
              </tr>
            </tbody>
          </table>
          <div className="cookies__button-container">
            <button onClick={this.deleteCookies}>{t("cookies.delete")}</button>
          </div>
        </div>
      </div>
    );
  }
}
