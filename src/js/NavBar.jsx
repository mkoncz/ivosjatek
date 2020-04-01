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
import hu_logo from './../img/hu_logo.png'; // https://www.flickr.com/photos/80497449@N04/7378164364
import en_logo from './../img/en_logo.jpg'; // https://www.publicdomainpictures.net/hu/view-image.php?image=136202

/**
 * List of the rules.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLang Shortened version of the language. Changing the currentLang property triggers an update at the language change.
 */
const NavBar = props => {

  // isOpen is a state of the NavBar.
  // setIsOpen sets the isOpen state.
  const [isOpen, setIsOpen] = useState(false);

  // Reverts the isOpen state.
  // Works without parameter, therefore can be used as an eventhandler in JSX.
  const toggle = () => setIsOpen(!isOpen);

  // Sets the selected language to English.
  // Changes state of the parent (MainContainer) component.
  const selectEnglish = () => {
    props.reloadLanguage('en');
  }

  // Sets the selected language to Hungarian.
  // Changes state of the parent (MainContainer) component.
  const selectHungarian = () => {
    props.reloadLanguage('hu');
  }

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/#">{props.i18n.t("nav.title")}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/#">{props.i18n.t("nav.game")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/szabalyzat/">{props.i18n.t("nav.rules")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/frissitesek/">{props.i18n.t("nav.release_notes")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/kapcsolat/">{props.i18n.t("nav.contact")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={selectEnglish}>
              <img className="lang-logo" src={en_logo} alt='english-logo' />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={selectHungarian}>
              <img className="lang-logo" src={hu_logo} alt='hungarian-logo' />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

// Export component.
export default NavBar;