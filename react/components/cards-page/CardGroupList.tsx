// Import React module.
import React from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import translate function.
import { t } from "../../i18n";

/**
 * The list of card groups.
 */
export default class CardGroupList extends React.Component {

  cookies = new Cookies();

  render() {
    return (
      <div>
        <h2 style={{ clear: "both", paddingTop: "40px" }}>{t("cards.categories")}</h2>
        <a href="/cards/outer-quality">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.outer_quality")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/outer-quality-18">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.outer_quality") + " 18+"}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/inner-quality">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.inner_quality")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/outfit">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.outfit")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/ownership">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.ownership")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/habit">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.habit")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/skill">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.skill")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/liked-thing">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.liked_thing")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/relationship">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.relationship")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/opinion">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.opinion")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/actual">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.actual")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/actual-18">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.actual") + " 18+"}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/current-game">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.current_game")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/according-to-you">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.according_to_you")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/according-to-you-18">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.according_to_you") + " 18+"}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/have-you-ever">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.have_you_ever")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/have-you-ever-18">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.have_you_ever_18")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/nudes">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.nudes")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/naked">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.naked")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/boobs">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.boobs")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/porn">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.porn")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/sex-place">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.sex_place")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/sex-partner">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.sex_partner")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/give-name">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.give_name")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/tell-a">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.tell_a")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/do-or-drink">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.do_or_drink")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/dare-or-drink">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.dare_or_drink")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/dare-or-drink-18">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.dare_or_drink_18")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/you-drink">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.you_drink")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/rule">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.rule")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/vote">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.vote")}" {t("cards.cards")}</h4>
          </div>
        </a>
        <a href="/cards/fastest-one">
          <div className="sponsor-card white-card">
            <h4>"{t("cards.fastest_one")}" {t("cards.cards")}</h4>
          </div>
        </a>
      </div>
    );
  }
}