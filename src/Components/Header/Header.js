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
          <Option>About</Option>
          <Option>Skill</Option>
          <Option>Work</Option>
          <Option>Project</Option>
          <Option>Contact</Option>
          {/*<Button>Say Hello</Button>*/}
        </Options>
      </HeaderContainer>
    </>
  );
};

export default Header;
