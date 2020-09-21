// Import ReactJS module.
import React from "react";

// Import post style classes.
import "./../../../../css/pages/posts.css";

// Import game content
import * as drinking_objects_hu from "./../../../../locales/drinking_games_hu.json"
import * as drinking_objects_en from "./../../../../locales/drinking_games_en.json"

import DrinkingGame from "./DrinkingGame";

/**
 * The page contains the list of posts.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 */
const DrinkingGames = props => {

  let games = props.currentLanguage === "hu" ? drinking_objects_hu.default.all_games : drinking_objects_en.default.all_games;


  for (var i = games.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = games[i];
    games[i] = games[j];
    games[j] = temp;
  }

  // Returns the opened post
  const getCurrentGame = () => {
    let post;
    games.forEach(element => {
      if (element[0].type === 'meta') {
        if (window.location.pathname.includes(element[0].slug)) {
          post = <DrinkingGame
            postObjects={element}>
          </DrinkingGame>
        }
      }
    });
    return post;
  }

  // Returns all thumbnail of all games
  const getAllThumbs = () => {
    return games.map(element => {
      return (
        <div>
          <a href={`/games/${element[0].slug}`}>
            <img width="100%" src={element[0].img}
              className="post-thumbnail" alt={props.i18n.t("nav.games")} />
            <div className="post-thumbnail-title-container" >
              <h4>
                {element[0].title}
              </h4>
            </div>
          </a>
          <div className="post-separator"></div>
        </div>
      )
    });
  }

  return (
    <div className="page-frame">
      <h1>{props.i18n.t("nav.games")}</h1>

      {getCurrentGame()}
      {getAllThumbs()}

    </div>
  );
}

// Export component.
export default DrinkingGames;