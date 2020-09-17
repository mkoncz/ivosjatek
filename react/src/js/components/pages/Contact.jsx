// Import ReactJS module.
import React, { Component } from "react";

// Instagram icon image resource.
import instagramImageResource from "./../../../img/insta.png";
import linkedinImageResource from "./../../../img/linkedin.png";

// Import contact style classes.
import "./../../../css/pages/contact.css";

/**
 * The page contains the contact e-mail address of the creator.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language. Changing the currentLanguage property triggers an update at the language change.
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

  render() {
    return (
      <div className="page-frame">
        <h3>{this.props.i18n.t("contact.contact")}</h3><br></br>
        <div>
          <a href="https://www.instagram.com/ivosjatek.hu/" className="insta-ref" target="_blank" rel="noopener noreferrer">
            <img src={instagramImageResource} className="insta-icon" alt="Instagram" />
            IVOSJATEK.HU
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/ivosjatek/" className="insta-ref" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImageResource} className="linkedin-contact-icon" alt="LinkedIn" />
            IVOSJATEK.HU
          </a>
        </div>

      </div>
    );
  }

}