import React from 'react';

import * as hun_note_resource from '../locales/release_notes_hu.json'
import * as en_note_resource from '../locales/release_notes_en.json'

function Releases(props) {

  let notes = props.currentLang=="hu" ? hun_note_resource.notes : en_note_resource.notes;

  return (
    <div className="releases-frame">
      {notes.map((release) => {
        return (
          <div>
            <h2>{release.title}</h2>
            {release.notes.split("\n").map((line) => {
              return <div> {line} </div>
            })}
            <br />
          </div>)
      })}
    </div>
  );
}

export default Releases;
