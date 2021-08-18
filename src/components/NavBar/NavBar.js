import React from "react";
import { Container, LeftSide, RightSide } from "./Navbar.elements";
import { Hamburger, Logo } from "../global";
import Search from "../Search/Search";
import ActivityButton from "../ActivityButton/ActivityButton";

const NavBar = () => {
  return (
    <div className="nav-bar-wrapper">
      <Container className="navbar-container">
        <LeftSide className="left-side">
          <Hamburger />
          <Logo className="logo" />
          <Search />
        </LeftSide>
        <RightSide className="right-side">
          <ActivityButton />
        </RightSide>
      </Container>
    </div>
  );
};

export default NavBar;
