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
    /*if (keyword === "cobbler") {
      return "/img/card_backs/cobbler.png";
    } else if (keyword === "peakybarbers") {
      return "/img/card_backs/peaky.png";
    } else if (keyword === "viztorony") {
      return "/img/card_backs/viztorony.jpg";
    } else if (keyword === "dugulasklinika") {
      return "/img/card_backs/dugulasklinika.png";
    } else if (keyword === "anonim") {
      return "/img/card_backs/anonim.png";
    } else if (keyword === "csillag") {
      return "/img/card_backs/csillagok.png";
    }*/
    return `/img/card_backs/${keyword}`;
    //return "/img/card_backs/new_logo.png";
  };

  const getRandomNeonColor = (logo) => {
    const colors = [
      "#7DFDFE",
      "#FFF",
      "#dfff11",
      "#66ff00",
      "#ff08e8",
      "#fe01b1",
      "#be03fd",
      "#ffcf09",
      "#0ff0fc",
      "#6600ff",
      "#ccff00",
      "#55ffff",
      "#ff0055",
    ];
    var hash = 0,
      i,
      chr;
    for (i = 0; i < logo.length; i++) {
      chr = logo.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    console.log(hash % colors.length);
    return colors[hash % colors.length];
  };

  return (
    <div
      className={`back`}
      style={{ backgroundColor: getRandomNeonColor(props.logo) }}
    >
      <img src={getImageResource(props.logo)} alt={t("image_alt.hungarian")} />
    </div>
  );
};

// Export component.
export default CardBack;
