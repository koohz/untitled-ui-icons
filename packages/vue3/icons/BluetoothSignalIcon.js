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
      d: "M2 7.5L12.8 16.5L7.4 21V3L12.8 7.5L2 16.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2 7.5L12.8 16.5L7.4 21V3L12.8 7.5L2 16.5M18.3301 7.05C19.3323 8.44324 19.9226 10.1527 19.9226 12C19.9226 13.8473 19.3323 15.5568 18.3301 16.95M15.5 9.17151C16.0593 9.9733 16.3872 10.9484 16.3872 12.0001C16.3872 13.0518 16.0593 14.0269 15.5 14.8287"
    })
  ]))
}