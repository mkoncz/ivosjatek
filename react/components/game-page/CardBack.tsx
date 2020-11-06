// Import React module.
import React from "react";

// Import translate function.
import { t } from "../../i18n";

// Interfaces for props and state.
interface CardBackProps {
  logo: string;
}

/**
 * Card Back page.
 * 
 * @param {Object} props.logo Configured i18next object. It is used for the localization.
 * @param {string} props.bgColor Color of the backside of the card.
 */
const CardBack = (props: CardBackProps) => {

  /**
   * Gets the imported image resource based on the logo keyword.
   * @param {string} keyword Logo field of the question JSON element. 
   */
  const getImageResource = (keyword) => {
    if (keyword === "cobbler") {
      return "/img/card_backs/cobbler.png";
    } else if (keyword === "peakybarbers") {
      return "/img/card_backs/peaky.png";
    } else if (keyword === "viztorony") {
      return "/img/card_backs/viztorony.jpg";
    } else if (keyword === "dugulasklinika") {
      return "/img/card_backs/dugulasklinika.png";
    } else if (keyword === "anonim") {
      return "/img/card_backs/anonim.png";
    }
    return "/img/card_backs/cocktail.svg";
  }

  return (
    <div className={`back ${props.logo}`} >
      <img src={getImageResource(props.logo)} alt={t("image_alt.hungarian")} />
    </div>
  );
}

// Export component.
export default CardBack;