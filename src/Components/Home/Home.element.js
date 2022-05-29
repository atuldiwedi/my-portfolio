import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import { GlobalColor } from "../../Global/Js/GlobalComp";

export const ContactMe = styled(motion.button)`
  border: 1px solid #7510f7;
  margin: ${({ tab }) => `0rem 0 0rem ${tab}rem`};
  background-color: transparent;
  padding: 1rem 2.5rem;
  color: #7510f7;
  letter-spacing: 4px;

  &:after,
  &:before {
    content: "";
    transition: inherit;
    z-index: -1;
    top: 0;
    width: 0;
    height: 100%;
    left: 0;
  }
  &:before {
    top: 0;
    width: 0;
    height: 100%;
  }

  &:hover {
    &:after {
      width: 100%;
      background: #7510f7;
      transition-delay: 0.35s;
    }
    &:before {
      width: 100%;
      transition-delay: 0s;
    }
    color: transparent;

    /* transition-delay: 0.5s;
    background-color: #7510f7;
    background-image: #7510f7;
    background-size: 100%;
    color: ${GlobalColor.color["background-primary"]};
    font-weight: bold; */
  }
`;

export const NameContainer = styled(motion.div)`
  font-size: 4rem;
  padding: 2px 4px;
  display: inline;
  /* background: -webkit-linear-gradient(
    -86deg,
    rgba(0, 212, 255, 1) 20%,
    rgba(125, 42, 232, 1) 80%
  ); */
  background: white;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px #000;

  .Typewriter {
    display: inline;
    background-color: ${GlobalColor.color["text-primary"]};
    padding: 0 5px;
  }

  .Typewriter .Typewriter__cursor {
  }
`;
