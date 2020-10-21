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
import hu_logo from "./../../img/hu_flag.png"; // https://www.flickr.com/photos/80497449@N04/7378164364
import en_logo from "./../../img/en_flag.png"; // https://www.publicdomainpictures.net/hu/view-image.php?image=136202

// Import navbar style classes.
import "./../../css/navbar.css";


/**
 * List of the rules.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language. Changing the currentLanguage property triggers an update at the language change.
 */
const NavBar = props => {

  // isNavbarOpen is a state of the NavBar.
  // setNavbarOpen sets the isNavbarOpen state.
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  /**
   * Inverts the isNavbarOpen state.
   */
  const toggleHamburger = () => setNavbarOpen(!isNavbarOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const closeHamburger = () => setNavbarOpen(false);

  return (
    <Navbar color="dark" dark expand="md" >
      <NavbarBrand href="/">{props.i18n.t("nav.title")}</NavbarBrand>
      <NavbarToggler onClick={toggleHamburger} />
      <Collapse isOpen={isNavbarOpen} navbar >
        <Nav className="mr-auto centered" navbar>
          <NavItem>
            <NavLink href="/game" onClick={closeHamburger}>{props.i18n.t("nav.game")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sponsors" onClick={closeHamburger}>{props.i18n.t("nav.sponsors")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact" onClick={closeHamburger}>{props.i18n.t("nav.contact")}</NavLink>
          </NavItem>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret className="nav-dropdown" >
              {props.i18n.t("nav.other")}
            </DropdownToggle>
            <DropdownMenu className="bg-dark">
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/sources" onClick={closeHamburger}>{props.i18n.t("nav.sources")}</NavLink>
                </NavItem></DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/releases" onClick={closeHamburger}>{props.i18n.t("nav.release_notes")}</NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/cards" onClick={closeHamburger}>{props.i18n.t("nav.cards")}</NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/rules" onClick={closeHamburger}>{props.i18n.t("nav.rules")}</NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/games" onClick={closeHamburger}>{props.i18n.t("nav.games")}</NavLink>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink>
              <img onClick={() => { props.reloadLanguage("en") }} className="lang-logo" src={en_logo} alt={props.i18n.t("image_alt.english")} />
              <img onClick={() => { props.reloadLanguage("hu") }} className="lang-logo" src={hu_logo} alt={props.i18n.t("image_alt.hungarian")} />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

// Export component.
export default NavBar;