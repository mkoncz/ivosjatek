// Import React module.
import React from 'react';

/**
 * List of the rules.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLang Shortened version of the language.
 */
function Rules(props) {
  return (
    <div className="rules-frame">
      <h2>Megkötések</h2>
      <p>A játék csak 18 éven felüliek számára engedélyezett.</p>
      <p>A játék csak saját felelősségre használható.</p>
      <p>A játék során történő alkoholfogyasztás nem kötelező, pusztán lehetőség.</p>
      <p>Alkoholfogyasztás esetén minden résztvevő törekedjen a mértékletes alkoholfogyasztásra!</p>
      <p>A feladatok végrehajtása nem kötelező.</p>
      <h2>Játékszabályok</h2>
      <p>Kattints/koppints a kártya hátlapjára.</p>
      <p>Olvasd fel a kártya előlapján lévő feladatot.</p>
      <p>A játékosok hajtsák végre a feladatot (ha szeretnék).</p>
      <p>A "Következő" gombbal húzd elő a következő lapot.</p>
    </div>
  );
}

// exporting component
export default Rules;
