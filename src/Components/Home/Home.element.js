import styled from "styled-components";
import { GlobalColor } from "../../Global/Js/GlobalComp";

export const ContactMe = styled.button`
  border: 1px solid #7510f7;
  margin: ${({ tab }) => `0rem 0 0rem ${tab}rem`};
  background-color: transparent;
  padding: 1rem 2rem;
  color: #7510f7;
`;

export const NameContainer = styled.strong`
  font-size: 4rem;
  padding: 0 4px;
  /* background: -webkit-linear-gradient(
    -86deg,
    rgba(0, 212, 255, 1) 20%,
    rgba(125, 42, 232, 1) 80%
  ); */
  background: #fff;
  -webkit-background-clip: text;
  -webkit-text-stroke: 2px transparent;
  color: ${GlobalColor.color["background-primary"]};
`;
