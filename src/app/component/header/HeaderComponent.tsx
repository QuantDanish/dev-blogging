import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <>
      <Navbar className="header-component" bg="light" expand="md">
        <Navbar.Brand href="/">Dev Blogging</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/sign-up">
              Sign Up
            </Link>
            <Link className="nav-link" to="/editor">
              Editor
            </Link>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
