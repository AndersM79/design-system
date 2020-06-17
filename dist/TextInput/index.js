import React from "react";
import { Input, Wrapper, Label } from "./styled";

var TextInput = function TextInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      label = _ref.label,
      value = _ref.value,
      _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(Wrapper, null, label && /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement(Input, {
    type: type,
    value: value,
    onChange: function onChange(e) {
      return _onChange && _onChange(e.target.value);
    }
  }));
};

export default TextInput;