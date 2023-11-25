const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M12 12.9C12.4971 12.9 12.9 12.4971 12.9 12C12.9 11.5029 12.4971 11.1 12 11.1C11.5029 11.1 11.1 11.5029 11.1 12C11.1 12.4971 11.5029 12.9 12 12.9Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5.7 12C5.7 8.52061 8.52061 5.7 12 5.7M16.0499 7.95L11.9999 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.9 12C12.9 12.4971 12.4971 12.9 12 12.9C11.5029 12.9 11.1 12.4971 11.1 12C11.1 11.5029 11.5029 11.1 12 11.1C12.4971 11.1 12.9 11.5029 12.9 12Z"
    })
  ]))
}