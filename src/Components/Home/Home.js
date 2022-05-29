import React from "react";
import { list, H1Variants, TextVariant } from "../../Global/Js/GlobalAnim";
import {
  Section,
  H1Header,
  HtmlText,
  Ptag,
  TextMotion,
} from "../../Global/Js/GlobalComp";
import Typewriter from "typewriter-effect";

import { ContactMe, NameContainer } from "./Home.element";
const Home = () => {
  return (
    <>
      <Section>
        <HtmlText>{"<html>"}</HtmlText>
        <HtmlText tab="1">{"<body>"}</HtmlText>
        <HtmlText tab="2">{"<h1>"}</HtmlText>
        <H1Header tab="3">
          <TextMotion variants={TextVariant} drag>
            Hi,
          </TextMotion>
          <br />
          <TextMotion variants={TextVariant}>
            I'm{" "}
            <NameContainer>
              <Typewriter
                options={{
                  strings: "Atul",
                  autoStart: true,
                  loop: true,
                  delay: 500,
                  pauseFor: 2000,
                }}
              />
            </NameContainer>
            ,
          </TextMotion>

          <br />
          <TextMotion variants={TextVariant}>
            Web developer and Programmer
          </TextMotion>
        </H1Header>
        <HtmlText tab="2">{"</h1>"}</HtmlText>
        <HtmlText tab="2">{"<p>"}</HtmlText>
        <Ptag tab="3" letterSpacing="4">
          Front End Developer / Backend Developer
        </Ptag>
        <HtmlText tab="2">{"</p>"}</HtmlText>
        <ContactMe tab="2">Contact me</ContactMe>
        <HtmlText tab="1">{"</body>"}</HtmlText>
        <HtmlText>{"</html>"}</HtmlText>
      </Section>
    </>
  );
};

export default Home;
