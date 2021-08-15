// Import React module.
import React from "react";

// Import Next modules.
import Link from 'next/link';

// Import cookie handling module.
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
        <Link href="/cards/outer-quality">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.outer_quality")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/outer-quality-18">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.outer_quality") + " 18+"}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/inner-quality">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.inner_quality")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/outfit">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.outfit")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/ownership">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.ownership")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/habit">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.habit")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/skill">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.skill")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/liked-thing">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.liked_thing")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/relationship">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.relationship")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/opinion">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.opinion")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/actual">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.actual")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/actual-18">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.actual") + " 18+"}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/current-game">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.current_game")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/according-to-you">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.according_to_you")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/according-to-you-18">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.according_to_you") + " 18+"}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/have-you-ever">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.have_you_ever")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/have-you-ever-18">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.have_you_ever_18")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/nudes">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.nudes")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/naked">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.naked")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/boobs">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.boobs")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/porn">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.porn")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/sex-place">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.sex_place")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/sex-partner">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.sex_partner")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/give-name">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.give_name")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/tell-a">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.tell_a")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/do-or-drink">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.do_or_drink")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/dare-or-drink">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.dare_or_drink")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/dare-or-drink-18">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.dare_or_drink_18")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/you-drink">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.you_drink")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/rule">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.rule")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/vote">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.vote")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
        <Link href="/cards/fastest-one">
          <a>
            <div className="sponsor-card white-card">
              <h4>"{t("cards.fastest_one")}&quot; {t("cards.cards")}</h4>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}