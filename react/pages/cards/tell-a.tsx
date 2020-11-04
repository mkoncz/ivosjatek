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

    let group = "tell_a";
    let title = t("cards.tell_a");
    let url = "https://ivosjatek.hu/cards/tell-a";

    return (
      <CardList
        group={group}
        title={title}
        url={url}
      />
    );
  }
}