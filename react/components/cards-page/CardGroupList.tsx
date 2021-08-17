// Import React module.
import React from "react";

// Import Next modules.
import Link from "next/link";

// Import translate function.
import { t } from "../../i18n";

// Import card categories
import card_categories from "./../../locales/card_categories.json";

/**
 * The list of card groups.
 */
export default class CardGroupList extends React.Component {

  cards = card_categories.cards;

  render() {
    return (
      <div>
        <h2 className="cards-block__title">
          {t("cards.categories")}
        </h2>
        <div>
          {this.cards.map(card => {
            return <Link href={card.link}>
              <a>
                <div className="cards-block__white-card">
                  <h4>
                    &quot;{t(`cards.${card.name}`)}&quot; {t("cards.cards")}
                  </h4>
                </div>
              </a>
            </Link>
          })}
        </div>
      </div>
    );
  }
}
