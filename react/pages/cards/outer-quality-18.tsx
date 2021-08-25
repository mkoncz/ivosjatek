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

    let group = "outer_quality_18";
    let title = t("cards.outer_quality") + " 18+";
    let url = "https://ivosjatek.hu/cards/outer-quality-18";

    return (
      <CardList
        group={group}
        title={title}
        url={url}
      />
    );
  }
}