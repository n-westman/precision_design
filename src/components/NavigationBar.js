import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
// import styled from 'styled-components';
// import logo from "../assets/logo.png";

export const NavigationBar = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="/" class="navBrand">
      Company
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <NavLink
            className="navCenter"
            to="/"
            exact
            activeStyle={{ color: "#D28C00", borderBottom: "2px solid" }}
          >
            Overview
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            className="navCenter"
            id="testimonials"
            to="/testimonials"
            exact
            activeStyle={{ color: "#D28C00", borderBottom: "2px solid" }}
          >
            Testimonials
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            className="navCenter"
            to="/find_us"
            exact
            activeStyle={{ color: "#D28C00", borderBottom: "2px solid" }}
          >
            Find Us
          </NavLink>
        </Nav.Item>
        {/* <Nav.Item>
          <NavLink
            class="navRight"
            to="/contact"
            exact
            activeStyle={{ color: "#D28C00" }}
          >
            Contact
          </NavLink>
        </Nav.Item> */}
      </Nav>
      <Nav>
        <Nav.Item>
          <NavLink
            href="/"
            id="engelska"
            // class="navbarRight"
            to="/overview"
            exact
            activeStyle={{ color: "#D28C00" }}
          >
            En
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            href="/"
            id="svenska"
            // class="navbarRight"
            to="/overview"
            exact
            activeStyle={{ color: "#D28C00" }}
          >
            / Sv
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            href="/contact"
            id="contact"
            // class="navbarRight"
            to="/contact"
            exact
            activeStyle={{ color: "#FFFFFF" }}
          >
            Contact
          </NavLink>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
