// Import React module.
import React from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "../navbar/NavBar";
import CustomHead from "../head/CustomHead";

// Import translate function.
import { t, initLanguageCookie } from "../../i18n";

// Import question resources.
import * as questions from "../../locales/questions.json";
import CardGroupList from "./CardGroupList";

// Interface for props.
interface CardListProps {
  group: string;
  title: string;
  url: string;
}

/**
 * The cards of the selected category listed.
 */
export default class CardList extends React.Component<CardListProps>  {

  cookies = new Cookies();

  constructor(props: CardListProps) {
    super(props);
    initLanguageCookie();
  }

  render() {
    let filteredList = questions['default'].filter((question) => {
      return question.t === this.props.group;
    })

    return (
      <div>
        <CustomHead
          title={t("nav.cards")}
          desc={t("desc.cards")}
          url={`https://ivosjatek.hu/${this.props.group}`}
        />
        <NavBar />
        <div className="page-frame">
          {this.props.title != null ? (
            <div> <h2>{this.props.title}</h2>
              {filteredList.map((question, index) => {
                return (
                  <div key={index} className="sponsor-card white-card">
                    <h4>{question[this.cookies.get("lang") === "hu" ? "hu" : "en"].replace("%NAME%", t("game.player").toUpperCase())}</h4>
                  </div>
                )
              })} </div>) : null}
          <CardGroupList/>
        </div>
      </div>
    );
  }
}