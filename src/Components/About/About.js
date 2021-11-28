import React from "react";
import { Section, H1Header, HtmlText, Ptag } from "../../Global/Js/GlobalComp";
import { ContactMe } from "./About.elememt";

const About = () => {
  return (
    <>
      <Section>
        <HtmlText>{"<html>"}</HtmlText>
        <HtmlText tab="1">{"<body>"}</HtmlText>
        <HtmlText tab="2">{"<h1>"}</HtmlText>
        <H1Header tab="3">
          Hi,
          <br />
          I'm Atul,
          <br />
          Web developer and Programmer
        </H1Header>
        <HtmlText tab="2">{"</h1>"}</HtmlText>
        <HtmlText tab="2">{"<p>"}</HtmlText>
        <Ptag tab="3">Front End Developer / Backend Developer</Ptag>
        <HtmlText tab="2">{"</p>"}</HtmlText>
        <ContactMe tab="2">Contact me</ContactMe>
      </Section>
    </>
  );
};

export default About;
