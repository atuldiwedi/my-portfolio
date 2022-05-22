import React from "react";
import {
  Section,
  HtmlText,
  H2Header,
  SplitContainer,
  Ptag,
  SplitSideContainer,
  ParaBr,
} from "../../Global/Js/GlobalComp";
import SkillProgress from "./SkillProgress/SkillProgress";

const Skill = () => {
  return (
    <>
      <Section>
        <HtmlText>{"<html>"}</HtmlText>
        <HtmlText tab="1">{"<body>"}</HtmlText>
        <SplitContainer>
          <SplitSideContainer>
            <HtmlText tab="2">{"<h2>"}</HtmlText>
            <H2Header tab="3">
              Skill & <br />
              Experience
            </H2Header>
            <HtmlText tab="2">{"</h2>"}</HtmlText>
            <HtmlText tab="2">{"<p>"}</HtmlText>
            <Ptag tab="3">
              Started the journy in 2020 and join NCR as intern and worked on
              muiltiple project like NCR.com, NCR Search, HR connect and HR
              Onboarding.Also work with talented people and create multiple
              project like Breezewalk.
              <ParaBr />
              I create responsive single page web application that are fast,
              easy to use, and built with best practices. The main area of my
              expertise is ReactJS, AEM, Angular, HTML, CSS and JS.
              <ParaBr />I also have knowledge of Express, MongoDB, SQL and
              Elastic AppSeach.
            </Ptag>
            <HtmlText tab="2">{"</p>"}</HtmlText>
          </SplitSideContainer>
          <SplitSideContainer MarginTop="4" MarginLeft="2">
            <SkillProgress Label="Frontend" Progress="80" />
            <SkillProgress Label="Backend" Progress="50" />
            <SkillProgress Label="React" Progress="70" />
            <SkillProgress Label="Angular" Progress="60" />
            <SkillProgress Label="AEM" Progress="50" />
          </SplitSideContainer>
        </SplitContainer>
        <HtmlText tab="1">{"</body>"}</HtmlText>
        <HtmlText>{"</html>"}</HtmlText>
      </Section>
    </>
  );
};

export default Skill;
