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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/#">Ivós Játék</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/#">Játék</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/szabalyzat/">Szabályzat</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/keszito/">Kapcsolat</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Example;
