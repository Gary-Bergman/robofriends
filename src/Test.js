import React, { useState } from 'react';
import './Test.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, 
  Jumbotron
} from 'reactstrap';

const Test = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Jumbotron>
        <h1 className="display-3">Hello, Chris!</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos vel blanditiis voluptatem. Obcaecati dicta sit minus similique recusandae nemo, explicabo ut soluta provident aut iste, blanditiis repellendus consequatur quae.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>

      <Card>
        <CardImg className="cardImage" src="https://avatars1.githubusercontent.com/u/50641962?s=460&u=cd0eed0e56bdfae5d65ee25541a681c650ea9fca&v=4" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Chris Turton</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Party Monster</CardSubtitle>
          <CardText>My name is Chris and I like to party!</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
}


export default Test;
