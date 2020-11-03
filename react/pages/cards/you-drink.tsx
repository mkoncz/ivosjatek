// Import ReactJS module.
import React, { Component } from "react";

// Import components.
import CardGroupList from '../../components/cards-page/CardGroupList';

// Import translate function.
import { t } from "../../i18n";

/**
 * The cards of the selected category listed.
 */
export default class SelectedCardGroup extends Component {

  render() {

    let group = "you_drink";
    let title = t("cards.you_drink");
    return (
      <CardGroupList
        group={group}
        title={title}
      />
    );
  }
}