// Import React modules.
import React from "react";

// Import Next modules.
import Link from "next/link";

// Interface for props.
interface SiteElementModel {
  slug?: string;
  type?: string;
  url?: string;
  text?: string;
  img?: string;
  desc?: string;
  level?: number;
}

// Interface for props.
interface DrinkingGameProps {
  siteElements: SiteElementModel[];
}

/**
 * The component describes a drinking game.
 */
const SelectedDrinkingGame = (props: DrinkingGameProps) => {
  /**
   * Creates a header element.
   */
  const createHeader = (siteObject, index) => {
    let level = siteObject.level;
    let text = siteObject.text;
    if (level === 1) {
      return (
        <h1 key={`h1-${index}`} className="drinking-game__header">
          {text}
        </h1>
      );
    } else if (level === 2) {
      return (
        <h2 key={`h2-${index}`} className="drinking-game__header">
          {text}
        </h2>
      );
    } else if (level === 3) {
      return (
        <h3 key={`h3-${index}`} className="drinking-game__header">
          {text}
        </h3>
      );
    } else if (level === 4) {
      return (
        <h4 key={`h4-${index}`} className="drinking-game__header">
          {text}
        </h4>
      );
    } else if (level === 5) {
      return (
        <h5 key={`h5-${index}`} className="drinking-game__header">
          {text}
        </h5>
      );
    }
  };

  /**
   * Creates a paragraph element.
   */
  const createParagraph = (siteObject, index) => {
    let text = siteObject.text;
    return (
      <p key={`p-${index}`} className="drinking-game__paragraph">
        {text}
      </p>
    );
  };

  /**
   * Creates a source link element.
   */
  const createSource = (siteObject, index) => {
    let text = siteObject.text;
    return (
      <p key={`p-${index}`} className="drinking-game__source">
        {text}
      </p>
    );
  };

  /**
   * Creates an image element.
   */
  const createImage = (siteObject, index) => {
    return (
      <img
        key={`img-${index}`}
        width="50%"
        className="drinking-game__image"
        alt="drink"
        src={siteObject.url}
      ></img>
    );
  };

  /**
   * Creates a link element.
   */
  const createLink = (siteObject, index) => {
    let url = siteObject.url;
    let text = siteObject.text;
    return (
      <Link href={url}>
        <a key={`a-${index}`}>{text}</a>
      </Link>
    );
  };

  /**
   * Creates a reddit element.
   */
  const createRedditCard = (siteObject, index) => {
    return (
      <blockquote key={index} className="reddit-card">
        <Link href={siteObject.url}>
          <a>link</a>
        </Link>
      </blockquote>
    );
  };

  return (
    <div key={props.siteElements[0].slug}>
      {props.siteElements.map((siteObject, index) => {
        if (siteObject.type === "header") {
          return createHeader(siteObject, index);
        } else if (siteObject.type === "par") {
          return createParagraph(siteObject, index);
        } else if (siteObject.type === "src") {
          return createSource(siteObject, index);
        } else if (siteObject.type === "link") {
          return createLink(siteObject, index);
        } else if (siteObject.type === "img") {
          return createImage(siteObject, index);
        } else if (siteObject.type === "reddit") {
          return createRedditCard(siteObject, index);
        }
        return "";
      })}
    </div>
  );
};

// Export component.
export default SelectedDrinkingGame;
