// Import ReactJS modules.
import React, { useState } from "react";

// Import Reactstrap (ReactJS version of Bootstraps).
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

// Import national flags of Hungary and Great Britain.
import hu_logo from "./../../../img/hu_flag.png"; // https://www.flickr.com/photos/80497449@N04/7378164364
import en_logo from "./../../../img/en_flag.png"; // https://www.publicdomainpictures.net/hu/view-image.php?image=136202

// Import navbar style classes.
import "./../../../css/navbar.css";

/**
 * List of the rules.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.reloadLanguage Reloads the language by the selected flag.
 */
const LanguageBox = props => {

  return (
    <div>
      <img onClick={() => { props.reloadLanguage("hu") }} className="lang-logo" src={hu_logo} alt={props.i18n.t("image_alt.hungarian")} />
      <img onClick={() => { props.reloadLanguage("en") }} className="lang-logo" src={en_logo} alt={props.i18n.t("image_alt.english")} />
    </div>
  );
}

// Export component.
export default LanguageBox;