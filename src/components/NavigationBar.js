import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
// import styled from 'styled-components';
import logo from '../assets/logo.png';

export const NavigationBar = () => (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img className="logoClass" src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
              <NavLink to="/" exact activeStyle={{ color: 'rgba(0,0,0,1)'}}>Home</NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink to="/about" exact activeStyle={{ color: 'black' }}>About</NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink to="/work" exact activeStyle={{ color: 'black' }}>Work</NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink to="/contact" exact activeStyle={{ color: 'black' }}>Contact</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
