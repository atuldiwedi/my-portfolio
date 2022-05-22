import React from "react";
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
        <NameContainer>{"<Atul Diwedi/>"}</NameContainer>
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
