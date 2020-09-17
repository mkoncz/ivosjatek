// Import ReactJS module.
import React, { Component } from "react";

// Import localized questions.
import * as hun_note_resource from "./../../../locales/release_notes_hu.json"
import * as en_note_resource from "./../../../locales/release_notes_en.json"


/**
 * Release notes of the application.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language.
 * @param {function} props.reloadLanguage Changes the language of the page.
 */
export default class Contact extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }
  
  componentDidMount() {
    this.props.reloadLanguage(this.props.currentLanguage);
  }
  
  // Localized list of the release notes.
  // Note entries contain a title and a list of changes.
  // Listing starts from the newest entry.
  // Iterates and prints release notes. 
  render() {
    let notes = this.props.currentLanguage === "hu" ? [...hun_note_resource.notes] : [...en_note_resource.notes];
    return (
      <div className="page-frame">
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
}