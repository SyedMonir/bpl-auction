import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">BPL</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
