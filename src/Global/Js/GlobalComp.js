import styled from "styled-components";

export const Section = styled.div`
  height: calc(100vh);
  width: 100%;
  padding: 2rem;
`;

export const SplitContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HtmlText = styled.div`
  font-size: 1rem;
  font-family: "Nanum Pen Script", cursive;
  margin: ${({ tab }) => `1rem 0 1rem ${tab}rem`};
`;

export const H1Header = styled.h1`
  font-size: 4rem;
  margin: ${({ tab }) => `1rem 0 1rem ${tab}rem`};
`;

export const H2Header = styled.h2`
  font-size: 3rem;
  margin: ${({ tab }) => `1rem 0 1rem ${tab}rem`};
`;

export const Ptag = styled.p`
  font-size: 1rem;
  margin: ${({ tab }) => `1rem 0 1rem ${tab}rem`};
`;
