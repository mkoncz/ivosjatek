// Import ReactJS module.
import React, { Component } from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "./../components/navbar/NavBar";
import CustomHead from "./../components/head/CustomHead";

// Import translate function.
import { t } from "./../i18n";

// Import localized entries of releases.
import * as hun_note_resource from "./../locales/release_notes_hu.json"
import * as en_note_resource from "./../locales/release_notes_en.json"

/**
 * Release notes of the application.
 */
export default class Releases extends Component {

  constructor() {
    super();
    this.cookies = new Cookies();
    if (this.cookies.get("lang") == null) {
      this.cookies.set("lang", "hu");
    }
  }

  // Localized list of the release notes.
  // Note entries contain a title and a list of changes.
  // Listing starts from the newest entry.
  // Iterates and prints release notes. 
  render() {
    let notes = this.cookies.get("lang") === "hu" ? [...hun_note_resource.notes] : [...en_note_resource.notes];
    return (
      <div>
        <CustomHead
          title={t("nav.release_notes")}
          desc={t("desc.release_notes")}
          url={"https://ivosjatek.hu/releases"}
        />
        <NavBar />
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
      </div>
    );
  }
}