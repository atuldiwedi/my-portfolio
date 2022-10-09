import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import { GlobalColor } from "../../Global/Js/GlobalComp";

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
