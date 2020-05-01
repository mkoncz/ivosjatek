// Import ReactJS module.
import React from 'react';

/**
 * Card Back page.
 * 
 * @param {Object} props.imageSource Configured i18next object. It is used for the localization.
 * @param {string} props.color Shortened version of the language.
 */
 const CardBack = props => {
  // Listing starts from the newest entry.
  return (
    <div className="back">
      <img src={props.imageSource} alt="back-logo" />
    </div>
  );
}

// Export component.
export default CardBack;