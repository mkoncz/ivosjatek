// Import ReactJS module.
import React from 'react';

// Import localized questions.
import * as hun_note_resource from './../../../../locales/release_notes_hu.json'
import * as en_note_resource from './../../../../locales/release_notes_en.json'

import CardBack from '../game_page/CardBack.jsx';

import cocktailIconResource from "./../../../../img/cocktail.png";
import peakyIconResource from "./../../../../img/sponsors/peaky.png";
import viztoronyIconResource from "./../../../../img/sponsors/viztorony.jpg";

/**
 * Sponsors of the game.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language.
 */
const Sponsors = props => {

  return (
    <div className="page-frame">
      <div>
        <div>
          <h3><b>Sponsors</b></h3><br />
          <h4>How to be a sponsor?</h4>
          <ul>
            <li>Pay 100 beers for me.</li>
          </ul>
          <h4>Why to be a sponsor?</h4>
          <ul>
            <li>You get a photo of me and my friends drinking 100 beers.</li>
            <li>You get listed among the sponsors.</li>
            <li>You get 5 own cards in the deck.</li>
            <ul>
              <li>You can choose the question of your card.</li>
              <li>You can choose the backside logo of the cards..</li>
            </ul>
            <li>If this drinking game is sold to a new owner, you can lose your sponsored cards. (You can keep the photo of us and the 100 beers.)</li>
          </ul>
        </div>
        <br />
        <div>
          <h3><b>Owner</b></h3><br />
          <h4>How to be the owner of the game?</h4>
          <ul>
            <li>Contact me ;)</li>
          </ul>
          <h4>Why to be the owner?</h4>
          <ul>
            <li>You can choose new name and logo for the game.</li>
            <li>You can choose a new theme for the page based on your brand colors.</li>
            <li>You can choose the backside logo of the cards.</li>
            <li>We can add/remove questions based on common agreement.</li>
            <li>We can create a new domain name for the game: e.g. awesomebeercompany-drinkinggame.com</li>
            <li>You get 1 year of free technical support from me.</li>
          </ul>
        </div>
        <br />
        <div className="sponsors-block">
          <h3><b>Current sponsors</b></h3><br />
          <div className="sponsor-card black">
            <img src={peakyIconResource} />
          </div>
          <div className="sponsor-card green">
            <img src={viztoronyIconResource} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Export component.
export default Sponsors;