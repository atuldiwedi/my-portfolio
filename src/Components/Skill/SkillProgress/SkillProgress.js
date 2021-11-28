import React from "react";
import {
  ProgressBar,
  ProgressContainer,
  ProgressLabel,
} from "./SkillProgress.element";

const SkillProgress = (props) => {
  return (
    <>
      <ProgressContainer>
        <ProgressLabel>{props.Label}</ProgressLabel>
        <ProgressBar value={props.Progress} max="100">
          {props.Progress}
        </ProgressBar>
      </ProgressContainer>
    </>
  );
};

export default SkillProgress;
