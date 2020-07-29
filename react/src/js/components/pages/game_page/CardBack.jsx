// Import ReactJS module.
import React from "react";

import cobblerIconResource from "./../../../../img/card_backs/cobbler.png";
import peakyIconResource from "./../../../../img/card_backs/peaky.png";
import viztoronyIconResource from "./../../../../img/card_backs/viztorony.jpg";
import cocktailIconResource from "./../../../../img/card_backs/cocktail.svg";

/**
 * Card Back page.
 * 
 * @param {Object} props.logo Configured i18next object. It is used for the localization.
 * @param {string} props.bgColor Color of the backside of the card.
 */
const CardBack = props => {

  /**
   * Gets the imported image resource based on the logo keyword.
   * @param {string} keyword Logo field of the question JSON element. 
   */
  const getImageResource = (keyword) => {
    if (keyword === "cobbler") {
      return cobblerIconResource;
    } else if (keyword === "peakybarbers") {
      return peakyIconResource;
    } else if (keyword === "viztorony") {
      return viztoronyIconResource;
    }
    return cocktailIconResource;
  }

  /**
   * Gets the imported image resource based on the logo keyword.
   * @param {string} keyword Logo field of the question JSON element. 
   */
  const getRandomName = () => {
    let names = JSON.parse(sessionStorage.getItem("players"));
    if(names !=null && names.length!=0){
      return <p className="player-name">{names[Math.floor(Math.random() * names.length)]}{props.i18n.t("game.card_owner")}</p>;
    } else {
      return "";
    }
  }

  return (
    <div className={`back ${props.logo}`} >
      {getRandomName()}
      <img src={getImageResource(props.logo)} alt={props.i18n.t("image_alt.hungarian")} />
    </div>
  );
}

// Export component.
export default CardBack;