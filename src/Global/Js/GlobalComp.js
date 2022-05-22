import styled from "styled-components";

export const Section = styled.div`
  height: calc(100vh);
  width: 100%;
  padding: 2rem;
`;

export const SplitContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ParaBr = styled.div`
  width: 100%;
  height: 0.8rem;
`;

export const SplitSideContainer = styled.div`
  width: 50%;
  margin-top: ${({ MarginTop }) => (MarginTop ? `${MarginTop}rem` : 0)};
  margin-left: ${({ MarginLeft }) => (MarginLeft ? `${MarginLeft}rem` : 0)};
  margin-right: ${({ MarginRight }) => (MarginRight ? `${MarginRight}rem` : 0)};
  margin-bottom: ${({ MarginBottom }) =>
    MarginBottom ? `${MarginBottom}rem` : 0};
`;
export const HtmlText = styled.div`
  font-size: 1rem;
  font-family: "Nanum Pen Script", cursive;
  margin: ${({ tab }) => `1rem 0 1rem ${tab}rem`};
`;

export const H1Header = styled.h1`
  font-size: 3rem;
  margin: ${({ tab }) => `1rem 0 1rem ${tab}rem`};
`;

export const H2Header = styled.h2`
  font-size: 3rem;
  margin: ${({ tab }) => `1rem 0 1rem ${tab}rem`};
`;

export const Ptag = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: ${({ tab }) => `1rem 0 1rem ${tab}rem`};
`;
