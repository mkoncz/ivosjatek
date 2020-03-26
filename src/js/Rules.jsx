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
      <ul>
        <li>A játék csak 18 éven felüliek számára engedélyezett.</li>
        <li>A játék csak saját felelősségre használható.</li>
        <li>A játék során történő alkoholfogyasztás nem kötelező, pusztán lehetőség.</li>
        <li>Alkoholfogyasztás esetén minden résztvevő törekedjen a mértékletes alkoholfogyasztásra!</li>
        <li>A feladatok végrehajtása nem kötelező.</li>
      </ul>
      <h2>Játékszabályok</h2>
      <ul>
        <li>Kattints/koppints a kártya hátlapjára.</li>
        <li>Olvasd fel a kártya előlapján lévő feladatot.</li>
        <li>A játékosok hajtsák végre a feladatot (ha szeretnék).</li>
        <li>A "Következő" gombbal húzd elő a következő lapot.</li>
      </ul>
    </div>
  );
}

// Exporting component.
export default Rules;
