import React from "react";
import logo from "../../Assets/name2 woa.svg";
import { ImLinkedin2, ImGithub } from "react-icons/im";
import {
  Button,
  HeaderContainer,
  NameContainer,
  Option,
  Options,
  SocialIcon,
  SocialIcons,
} from "./Header.element";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <NameContainer to="my-portfolio">
          <img src={logo} alt="logo" />
          <div>Atul Diwedi</div>
        </NameContainer>
        <Options>
          <Option to="about">About</Option>
          <Option to="skill">Skill</Option>
          <Option to="project">Project</Option>
          <Option to="contact-me">Contact</Option>
          {/*<Button>Say Hello</Button>*/}
          <SocialIcons>
            <SocialIcon to="/">
              <ImLinkedin2 />
            </SocialIcon>
            <SocialIcon to="/">
              <ImGithub />
            </SocialIcon>
          </SocialIcons>
        </Options>
      </HeaderContainer>
    </>
  );
};

export default Header;
