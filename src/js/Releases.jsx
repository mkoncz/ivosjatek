// Import React module.
import React from 'react';

// Import localized questions.
import * as hun_note_resource from '../locales/release_notes_hu.json'
import * as en_note_resource from '../locales/release_notes_en.json'

/**
 * Release notes of the application.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLang Shortened version of the language.
 */
function Releases(props) {

  // Localized list of the release notes.
  let notes = props.currentLang === "hu" ? hun_note_resource.notes : en_note_resource.notes;

  // Iterate and print release notes. Starts from the newest one.
  return (
    <div className="releases-frame">
      {notes.reverse().map((release) => {
        return (
          <div>
            <h2>{release.title}</h2>
            {release.notes.split("\n").map((bullet_point) => {
              return <div> {bullet_point} </div>
            })}
            <br />
          </div>)
      })}
    </div>
  );
}

export default Releases;
