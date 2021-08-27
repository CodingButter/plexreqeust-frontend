import React, { useState } from "react";
import {
  AAGMiniStats,
  ActivityButtonWrapper,
  NavbarContainer,
} from "./Navbar.elements";
import { Hamburger, Logo } from "../global";
import Search from "../Search/Search";
import ActivityButton from "../ActivityButton/ActivityButton";
import { Container } from "../global/Containers";

const NavBar = () => {
  const NavbarTemplate = [
    { columns: "150px 1fr 100px", rows: "60px" },
    { columns: "150px 1fr 100px", rows: "60px" },
    {
      columns: "1fr 50px",
      rows: "0",
      order: "2 3",
      children: [{ display: "none" }, { width: "100%" }, {}],
    },
  ];

  return (
    <NavbarContainer template={NavbarTemplate} className="navbar-container">
      <Container className="left-navbar-container">
        <Hamburger />
        <Logo className="logo" />
      </Container>
      <Container className="center-navbar-container">
        <Search />
      </Container>
      <Container className="right-navbar-container">
        <ActivityButtonWrapper>
          <ActivityButton />
        </ActivityButtonWrapper>
      </Container>
    </NavbarContainer>
  );
};

export default NavBar;
