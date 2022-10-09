import styled from "styled-components";

export const Input = styled.input`
  display: block;
  border: 0;
  background: #2b2b2b;
  height: 3rem;
  font-size: 1rem;
  color: #8d8d8d;
  padding: 0 1.25rem;
  outline: none;
  width: calc(100% - 1rem);
  margin: 0.5rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const Form = styled.form`
  min-width: 400px;
`;

export const Message = styled.textarea`
  display: block;
  border: 0;
  background: #2b2b2b;
  font-size: 1rem;
  color: #8d8d8d;
  padding: 1rem 1.25rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  margin: 0.9rem 0.5rem;
  width: calc(100% - 1rem);
  height: 10rem;
  resize: vertical;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 0.5rem;
`;
