// Import ReactJS module.
import React, { Component } from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * The page contains the contact e-mail address of the creator.
 */
export default class Contact extends Component {

  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.contact")}
          desc={t("desc.contact")}
          url={"https://ivosjatek.hu/contact"}
        />
        <NavBar />
        <div className="page-frame">
          <h3>{t("contact.contact")}</h3><br></br>
          <div className="insta-box">
            <a href="https://www.instagram.com/ivosjatek.hu" className="insta-ref" target="_blank" rel="noopener noreferrer">
              <img src="/img/contact_page/insta.png" className="insta-contact-icon" alt="Instagram" />
              IVOSJATEK.HU
            </a>
          </div>
          <div className="facebook-box">
            <a href="https://www.facebook.com/ivosjatek.hu" className="facebook-ref" target="_blank" rel="noopener noreferrer">
              <img src="/img/contact_page/facebook.png" className="facebook-contact-icon" alt="facebook" />
              IVÓS JÁTÉK
            </a>
          </div>
          <div className="linkedin-box">
            <a href="https://www.linkedin.com/company/ivosjatek" className="linkedin-ref" target="_blank" rel="noopener noreferrer">
              <img src="/img/contact_page/linkedin.png" className="linkedin-contact-icon" alt="LinkedIn" />
              IVOSJATEK.HU
            </a>
          </div>
          <div className="github-box">
            <a href="https://github.com/matthewkoncz/ivosjatek" className="github-ref" target="_blank" rel="noopener noreferrer">
              <img src="/img/contact_page/github.png" className="github-contact-icon" alt="Github" />
              IVOSJATEK
            </a>
          </div>
        </div>
      </div>
    );
  }

}