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
    let group = "inner_quality";
    let title = t("cards.inner_quality");
    let url = "https://ivosjatek.hu/cards/inner-quality";

    return <CardList group={group} title={title} url={url} />;
  }
}
