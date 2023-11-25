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
      d: "M5.35 14.7L11.2001 21L17.05 14.7L11.2 16.05L5.35 14.7Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M4 11.1001L11.2 12.9L18.4 11.1L11.2 3L4 11.1001Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M11.2 3V9.30007V3Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M4 11.1001L11.2 9.30007L18.4 11.1"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 11.1001L11.2 12.9L18.4 11.1M4 11.1001L11.2 3M4 11.1001L11.2 9.30007M18.4 11.1L11.2 3M18.4 11.1L11.2 9.30007M11.2 3V9.30007M5.35 14.7L11.2001 21L17.05 14.7L11.2 16.05L5.35 14.7Z"
    })
  ]))
}