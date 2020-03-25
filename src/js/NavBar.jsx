import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import hu_logo from './../img/hu_logo.png'; 
import en_logo from './../img/en_logo.jpg'; 


const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  const selectEnglish = () => {
    props.reloadLanguage('en');
  }

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
              <NavLink href="/#/frissitesek/">{props.i18n.t("nav.releasenotes")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/kapcsolat/">{props.i18n.t("nav.contact")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={selectEnglish}>
                <img className="lang-logo" src={en_logo} alt='english'/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={selectHungarian}>
                <img className="lang-logo" src={hu_logo} alt='hungarian'/>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default NavBar;
