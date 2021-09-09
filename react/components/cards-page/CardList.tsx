// Import React module.
import React from "react";

// Import cookie handling module.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "../navbar/NavBar";
import CustomHead from "../head/CustomHead";
import CardGroupList from "./CardGroupList";

// Import translate function.
import { t, initLanguageCookie } from "../../i18n";

// Import question resources.
import * as questions from "../../resources/questions.json";

// Interface for props.
interface CardListProps {
  group: string;
  title: string;
  url: string;
}

/**
 * The cards of the selected category listed.
 */
export default class CardList extends React.Component<CardListProps> {
  cookies = new Cookies();

  constructor(props: CardListProps) {
    super(props);
    initLanguageCookie();
  }

  render() {
    let filteredList = questions["default"].filter((question) => {
      return question.type === this.props.group;
    });

    return (
      <div>
        <CustomHead
          title={t("nav.cards")}
          desc={t("desc.cards")}
          url={`https://ivosjatek.hu/${this.props.group}`}
        />
        <NavBar />
        <div className="page-frame cards-block">
          {this.props.title != null ? (
            <div>
              <h2 className="cards-block__title">{this.props.title}</h2>
              <div className="cards-block__cards-container">
                {filteredList.map((question, index) => {
                  return (
                    <div key={index} className="white-card">
                      <h4>
                        {question[
                          this.cookies.get("lang") === "hu" ? "hu" : "en"
                        ].replace("%NAME%", t("game.player").toUpperCase())}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          <CardGroupList />
        </div>
      </div>
    );
  }
}
