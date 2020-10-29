// Import ReactJS module.
import React, { Component } from "react";

// Import components.
import CardGroupList from './../../components/cards-page/CardGroupList';

// Import translate function.
import { t } from "./../../i18n";

/**
 * The cards of the selected category listed.
 */
export default class SelectedCardGroup extends Component {

  render() {

    let group = "give_name";
    let title = t("cards.give_name");
    return (
      <CardGroupList
        group={group}
        title={title}
      />
    );
  }
}