import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class AppNavbar extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
      return (
        <div>
        <Navbar color="dark" dark expand="lg" className="mb-5">
        <Container><NavbarBrand href="/"> <FontAwesomeIcon icon="utensils"/>{" "}Meal Planning</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
        <NavItem className="icon">
        <i className="fa fa-pinterest fa-2x" style={{marginTop: ".4rem"}}></i>
            <NavLink href="https://www.pinterest.com/">
            Inspiration
            </NavLink>
        </NavItem>
        </Nav>
        </Collapse>
        </Container></Navbar>
    </div>

      );
      }
}
