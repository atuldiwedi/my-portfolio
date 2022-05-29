import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalColor } from "../../Global/Js/GlobalComp";

export const HeaderContainer = styled.nav`
  width: 15%;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  border: 1px solid #8d8d8d;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
`;

export const NameContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  padding: 0.5rem;
  background-color: #000;
  align-items: center;
  border-bottom: 1px solid ${GlobalColor.color["text-primary"]};
  color: ${GlobalColor.color["text-primary"]};
`;

export const Logo = styled.div`
  font-size: 1.5rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled(Link)`
  /* border-top: 1px solid ${GlobalColor.color["text-primary"]}; */
  border-bottom: 1px solid ${GlobalColor.color["text-primary"]};
  /* border: 1px solid #8d8d8d; */
  padding: 1.5rem 1rem;
  text-decoration: none;
  color: ${GlobalColor.color["text-secondary"]};
  text-align: center;
  font-weight: 500;

  &:hover {
    background-color: rgb(0, 212, 255);
    background-image: linear-gradient(
      -56deg,
      rgba(0, 212, 255, 1) 25%,
      rgba(125, 42, 232, 1) 75%
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`;
export const SocialIcon = styled(Link)`
  text-decoration: none;
  color: ${GlobalColor.color["text-primary"]};
`;
// export const Button = styled.span`
//   border: 2px solid blue;
//   font-size: 1rem;
//   font-weight: 600;
//   color: blue;
//   padding: 1rem 2rem;
//   border-radius: 2rem;
// `;
