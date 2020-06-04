import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Layout extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => this.props.onNavLinkClicked('home')}>JobSearch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={() => this.props.onNavLinkClicked('listings')}>Listings</Nav.Link>
            <Nav.Link href="#" onClick={() => this.props.onNavLinkClicked('jobs')}>Jobs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Layout;