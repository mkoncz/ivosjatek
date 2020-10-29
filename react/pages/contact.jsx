// Import ReactJS module.
import React, {Component} from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "./../components/navbar/NavBar";
import CustomHead from "./../components/head/CustomHead";

// Import translate function.
import { t } from "./../i18n";

/**
 * The page contains the contact e-mail address of the creator.
 */
export default class Contact extends Component {
 
  constructor() {
    super();
    this.cookies = new Cookies();
    if (this.cookies.get("lang") == null) {
      this.cookies.set("lang", "hu");
    }
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.contact")}
          desc={t("desc.contact")}
        />
        <NavBar />
        <div className="page-frame">
          <h3>{t("contact.contact")}</h3><br></br>
          <div>
            <a href="https://www.instagram.com/ivosjatek.hu/" className="insta-ref" target="_blank" rel="noopener noreferrer">
              <img src="/img/insta.png" className="insta-icon" alt="Instagram" />
            IVOSJATEK.HU
          </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/ivosjatek/" className="insta-ref" target="_blank" rel="noopener noreferrer">
              <img src="/img/linkedin.png" className="linkedin-contact-icon" alt="LinkedIn" />
            IVOSJATEK.HU
          </a>
          </div>
        </div>
      </div>
    );
  }

}