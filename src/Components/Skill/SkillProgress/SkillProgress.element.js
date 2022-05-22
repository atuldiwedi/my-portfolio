import styled from "styled-components";

export const ProgressContainer = styled.div`
  display: block;
  width: 100%;
  margin: 1rem 0;
  position: relative;
`;

export const ProgressLabel = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 2rem;
`;
export const ProgressBar = styled.progress`
  position: absolute;
  width: 100%;
  height: 4px;
  color: red;
`;
