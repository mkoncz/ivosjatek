// Import ReactJS module.
import React, { Component } from "react";

// Import components.
import CardList from '../../components/cards-page/CardList';

// Import translate function.
import { t } from "../../i18n";

/**
 * The cards of the selected category listed.
 */
export default class SelectedCardGroup extends Component {

  render() {

    let group = "outer_quality";
    let title = t("cards.outer_quality");
    let url = "https://ivosjatek.hu/cards/outer-quality";

    return (
      <CardList
        group={group}
        title={title}
        url={url}
      />
    );
  }
}