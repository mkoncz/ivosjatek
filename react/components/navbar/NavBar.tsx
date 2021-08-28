// Import React modules.
import React, { useState } from "react";

// Import Reactstrap (React version of Bootstrap).
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// Import component.
import LanguageBox from "./LanguageBox";

// Import translate function.
import { t } from "../../i18n";

/**
 * Navition bar.
 * Represented as Hamburger menu on mobile view.
 */
const NavBar = () => {
  // hooks
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleHamburger = () => setNavbarOpen(!isNavbarOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeHamburger = () => setNavbarOpen(false);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">{t("nav.title")}</NavbarBrand>
      <NavbarToggler onClick={toggleHamburger} />
      <Collapse isOpen={isNavbarOpen} navbar>
        <Nav className="mr-auto centered" navbar>
          <NavItem>
            <NavLink href="/game" onClick={closeHamburger}>
              {t("nav.game_nav")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sponsors" onClick={closeHamburger}>
              {t("nav.sponsors")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact" onClick={closeHamburger}>
              {t("nav.contact")}
            </NavLink>
          </NavItem>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret className="nav-dropdown">
              {t("nav.other")}
            </DropdownToggle>
            <DropdownMenu className="bg-dark">
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/games" onClick={closeHamburger}>
                    {t("nav.games")}
                  </NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/game-light" onClick={closeHamburger}>
                    Light {t("nav.game_nav")}
                  </NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/rules" onClick={closeHamburger}>
                    {t("nav.rules")}
                  </NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/sources" onClick={closeHamburger}>
                    {t("nav.sources")}
                  </NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/releases" onClick={closeHamburger}>
                    {t("nav.release_notes")}
                  </NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/cards" onClick={closeHamburger}>
                    {t("nav.cards")}
                  </NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem className="nav-dropdown-item">
                <NavItem>
                  <NavLink href="/posts" onClick={closeHamburger}>
                    {t("nav.posts")}
                  </NavLink>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink>
              <LanguageBox />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

NavBar.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

// Export component.
export default NavBar;
