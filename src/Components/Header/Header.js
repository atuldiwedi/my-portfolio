import React from "react";
import logo from "../../Assets/name2.svg";
import {
  Button,
  HeaderContainer,
  NameContainer,
  Option,
  Options,
} from "./Header.element";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <NameContainer>
          <img src={logo} alt="logo" />

          {"Atul"}
        </NameContainer>
        <Options>
          <Option to="about">About</Option>
          <Option to="skill">Skill</Option>
          <Option to="project">Project</Option>
          <Option to="contact-me">Contact</Option>
          {/*<Button>Say Hello</Button>*/}
        </Options>
      </HeaderContainer>
    </>
  );
};

export default Header;
