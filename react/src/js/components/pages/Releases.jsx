// Import ReactJS module.
import React from "react";

// Import localized questions.
import * as hun_note_resource from "./../../../locales/release_notes_hu.json"
import * as en_note_resource from "./../../../locales/release_notes_en.json"

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

/**
 * Release notes of the application.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language.
 */
const Releases = props => {

  // Localized list of the release notes.
  // Note entries contain a title and a list of changes.
  let notes = props.currentLanguage === "hu" ? [...hun_note_resource.notes] : [...en_note_resource.notes];

  // Iterates and prints release notes. 
  // Listing starts from the newest entry.
  return (
    <div className="page-frame">
      <Helmet>
        <title>{props.i18n.t("nav.release_notes")} | {props.i18n.t("nav.title")}</title>
        <meta name="description" content={props.i18n.t("desc.release_notes")} />
        <link rel="canonical" href="https://ivosjatek.hu/releases" />
      </Helmet>
      {notes.reverse().map((release) => {
        return (
          <div key={release.title}>
            <h4>{release.title}</h4>
            <ul>
              {release.changes.map((bullet_point) => {
                return <li key={bullet_point}> {bullet_point} </li>
              })}
            </ul>
            <br />
          </div>)
      })}
    </div>
  );
}

// Export component.
export default Releases;