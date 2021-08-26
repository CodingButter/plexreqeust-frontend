import React, { useState } from "react";
import {
  AAGMiniStats,
  ActivityButtonWrapper,
  Container,
  LeftSide,
  RightSide,
} from "./Navbar.elements";
import { Hamburger, Logo } from "../global";
import Search from "../Search/Search";
import ActivityButton from "../ActivityButton/ActivityButton";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const showStats = () => {
    console.log("showing stats");
    setShow(true);
  };
  const hideStats = () => {
    console.log("hiding Stats");
    setShow(false);
  };
  return (
    <div className="nav-bar-wrapper">
      <Container className="navbar-container">
        <LeftSide className="left-side">
          <Hamburger />
          <Logo className="logo" />
          <Search />
        </LeftSide>
        <RightSide className="right-side">
          <AAGMiniStats show={show} />
          <ActivityButtonWrapper
            onMouseEnter={showStats}
            onMouseLeave={hideStats}
          >
            <ActivityButton />
          </ActivityButtonWrapper>
        </RightSide>
      </Container>
    </div>
  );
};

export default NavBar;
