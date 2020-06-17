import React from "react";

import { Input, Wrapper, Label} from "./styled";

const TextInput = ({ type = "text", label, value, onChange }) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  </Wrapper>
);

export default TextInput;
