// Import ReactJS modules.
import React, { useState } from 'react';

// Import Reactstrap (ReactJS version of Bootstraps).
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

// Import national flags of Hungary and Great Britain.
import hu_logo from './../../img/hu_logo.png'; // https://www.flickr.com/photos/80497449@N04/7378164364
import en_logo from './../../img/en_logo.jpg'; // https://www.publicdomainpictures.net/hu/view-image.php?image=136202

/**
 * List of the rules.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language. Changing the currentLanguage property triggers an update at the language change.
 */
const NavBar = props => {

  // isOpen is a state of the NavBar.
  // setIsOpen sets the isOpen state.
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Inverts the isOpen state.
   */
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" >
        <NavbarBrand href="/#">{props.i18n.t("nav.title")}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto centered" navbar>
            <NavItem>
              <NavLink href="/#">{props.i18n.t("nav.game")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/rules/">{props.i18n.t("nav.rules")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/releases/">{props.i18n.t("nav.release_notes")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/sources/">{props.i18n.t("nav.sources")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/contact/">{props.i18n.t("nav.contact")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <img onClick={props.selectEnglish} className="lang-logo" src={en_logo} alt='english-logo' />
                <img onClick={props.selectHungarian} className="lang-logo" src={hu_logo} alt='hungarian-logo' />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  );
}

// Export component.
export default NavBar;