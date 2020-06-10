// Import ReactJS module.
import React from 'react';

// Instagram icon iamge resource.
import instagramImageResource from "./../../../img/insta.png";

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";


/**
 * The page contains the contact e-mail address of the creator.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 */
const Contact = props => {
  return (
    <div className="page-frame">
      <Helmet>
        <title>{props.i18n.t("nav.contact")} | {props.i18n.t("nav.title")}</title>
      </Helmet>
      <h3>{props.i18n.t("contact.contact")}</h3><br></br>
      <a href="https://www.instagram.com/ivosjatek.hu/" className="insta-ref" target="_blank">
        <img src={instagramImageResource} className="insta-icon" alt="insta-icon" />
        IVOSJATEK.HU
      </a>
    </div>
  );
}

// Export component.
export default Contact;