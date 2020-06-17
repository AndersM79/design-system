import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 0.5em;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export { Input, Wrapper, Label };
