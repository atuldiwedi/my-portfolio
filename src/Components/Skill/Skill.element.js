import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: ${({ Margin }) => (Margin ? "1rem" : "0")};
`;
