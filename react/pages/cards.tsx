// Import ReactJS module.
import React, { Component } from "react";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";
import CardGroupList from "../components/cards-page/CardGroupList";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * The card categories listed.
 */
export default class CardGroups extends Component {
  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.cards")}
          desc={t("desc.cards")}
          url={"https://ivosjatek.hu/cards"}
        />
        <NavBar />
        <CardGroupList />
      </div>
    );
  }
}
