// Import ReactJS module.
import React from 'react';

/**
 * The page contains the contact e-mail address of the creator.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 */
const Contact = props => {
  return (
    <div className="page-frame">
      <h3>{props.i18n.t("contact.contact")}</h3>
      <p>matthewkoncy@gmail.com</p>
     </div>
  );
}

// Export component.
export default Contact;