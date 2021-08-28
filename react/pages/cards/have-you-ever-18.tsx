// Import ReactJS module.
import React, { Component } from "react";

// Import components.
import CardList from "../../components/cards-page/CardList";

// Import translate function.
import { t } from "../../i18n";

/**
 * The cards of the selected category listed.
 */
export default class SelectedCardGroup extends Component {
  render() {
    let group = "have_you_ever_18";
    let title = t("cards.have_you_ever_18");
    let url = "https://ivosjatek.hu/cards/have-you-ever-18";

    return <CardList group={group} title={title} url={url} />;
  }
}
