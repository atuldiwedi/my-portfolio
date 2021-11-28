import React from "react";
import {
  Section,
  HtmlText,
  H2Header,
  SplitContainer,
  Ptag,
} from "../../Global/Js/GlobalComp";
import { Container } from "./Skill.element";
import SkillProgress from "./SkillProgress/SkillProgress";

const Skill = () => {
  return (
    <>
      <Section>
        <SplitContainer>
          <Container>
            <HtmlText tab="2">{"<h2>"}</HtmlText>
            <H2Header tab="3">
              Skill & <br />
              Experience
            </H2Header>
            <HtmlText tab="2">{"</h2>"}</HtmlText>
            <HtmlText tab="2">{"<p>"}</HtmlText>
            <Ptag tab="3">
              Started the journy in 2020 and join NCR as intern and worked on
              muiltiple project like NCR.com, HR connect and HR Onboarding.
            </Ptag>
            <HtmlText tab="2">{"</p>"}</HtmlText>
          </Container>
          <Container Margin>
            <SkillProgress Label="Frontend" Progress="80" />
            <SkillProgress Label="Backend" Progress="50" />
            <SkillProgress Label="React" Progress="70" />
            <SkillProgress Label="Angular" Progress="60" />
            <SkillProgress Label="AEM" Progress="50" />
          </Container>
        </SplitContainer>
      </Section>
    </>
  );
};

export default Skill;
