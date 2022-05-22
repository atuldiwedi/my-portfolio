import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.nav`
  width: 15%;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid #8d8d8d;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: 30%;
  background-color: #000;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled(Link)`
  border: 1px solid #8d8d8d;
  padding: 1rem;
  text-decoration: none;
  color: #545454;
`;

// export const Button = styled.span`
//   border: 2px solid blue;
//   font-size: 1rem;
//   font-weight: 600;
//   color: blue;
//   padding: 1rem 2rem;
//   border-radius: 2rem;
// `;
