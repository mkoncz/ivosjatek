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
import hu_logo from './../../img/hu_logo_grey_bg.jpg'; // https://www.flickr.com/photos/80497449@N04/7378164364
import en_logo from './../../img/en_logo_grey_bg.jpg'; // https://www.publicdomainpictures.net/hu/view-image.php?image=136202

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
  const toggleHamburger = () => setIsOpen(!isOpen);

  const closeHamburger = () => setIsOpen(false);

  return (
    <Navbar color="dark" dark expand="md" >
      <NavbarBrand href="/#">{props.i18n.t("nav.title")}</NavbarBrand>
      <NavbarToggler onClick={toggleHamburger} />
      <Collapse isOpen={isOpen} navbar >
        <Nav className="mr-auto centered" navbar>
          <NavItem>
            <NavLink href="/#" onClick={closeHamburger}>{props.i18n.t("nav.game")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/rules/" onClick={closeHamburger}>{props.i18n.t("nav.rules")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/releases/" onClick={closeHamburger}>{props.i18n.t("nav.release_notes")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/sources/" onClick={closeHamburger}>{props.i18n.t("nav.sources")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/contact/" onClick={closeHamburger}>{props.i18n.t("nav.contact")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/sponsors/" onClick={closeHamburger}>{props.i18n.t("nav.sponsors")}</NavLink>
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