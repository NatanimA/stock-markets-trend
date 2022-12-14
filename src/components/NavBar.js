import React from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { Container, Navbar } from 'react-bootstrap';

const NavBar = () => (
  <header>
    <Container className="d-flex flex-sm-row justify-content-between">
      <h2>
        <Navbar.Brand className="brand-name" href="#">Wall Street</Navbar.Brand>
      </h2>
      <div className="justify-content-end text-white mx-4 flex-wrap">
        <a href="#search" className="text-white mx-3">
          <FaSearch />
        </a>
        <FaMicrophone className="mx-3" />
        <IoMdSettings />
      </div>
    </Container>
  </header>

);

export default NavBar;
