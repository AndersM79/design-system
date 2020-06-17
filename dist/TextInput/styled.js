import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: ", ";\n  background: papayawhip;\n  border: none;\n  border-radius: 3px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5em;\n  font-weight: 700;\n  letter-spacing: 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5em;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from "styled-components";
var Wrapper = styled.div(_templateObject());
var Label = styled.label(_templateObject2());
var Input = styled.input(_templateObject3(), function (props) {
  return props.inputColor || "palevioletred";
});
export { Input, Wrapper, Label };