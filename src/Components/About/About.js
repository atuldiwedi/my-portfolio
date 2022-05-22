import React from "react";
import {
  Section,
  H1Header,
  HtmlText,
  Ptag,
  SplitContainer,
  SplitSideContainer,
  ParaBr,
} from "../../Global/Js/GlobalComp";

const About = () => {
  return (
    <>
      <Section>
        <HtmlText>{"<html>"}</HtmlText>
        <HtmlText tab="1">{"<body>"}</HtmlText>
        <SplitContainer>
          <SplitSideContainer>
            <HtmlText tab="2">{"<h2>"}</HtmlText>
            <H1Header tab="3">Me, myself & I</H1Header>
            <HtmlText tab="2">{"</h2>"}</HtmlText>
            <HtmlText tab="2">{"<p>"}</HtmlText>
            <Ptag tab="3">
              I’m a Software developer from India. I have a passion for learning
              new technologies.
              <ParaBr />
              Well-organised person, problem solver, working professional with
              high attention to detail. Likes Anime, TV series and recently
              started reading books.
              <ParaBr />
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </Ptag>
            <HtmlText tab="2">{"</p>"}</HtmlText>
          </SplitSideContainer>
          <SplitSideContainer MarginLeft="2">
            <h3></h3>
          </SplitSideContainer>
        </SplitContainer>
        <HtmlText tab="1">{"</body>"}</HtmlText>
        <HtmlText>{"</html>"}</HtmlText>
      </Section>
    </>
  );
};

export default About;
