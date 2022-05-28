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

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: #000;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled(Link)`
  border: 1px solid #8d8d8d;
  padding: 1rem;
  text-decoration: none;
  color: ${GlobalColor.color["text-secondary"]};
  text-align: center;

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

// export const Button = styled.span`
//   border: 2px solid blue;
//   font-size: 1rem;
//   font-weight: 600;
//   color: blue;
//   padding: 1rem 2rem;
//   border-radius: 2rem;
// `;
