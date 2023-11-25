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
      d: "M3 5.6V20L9.3 16.4L15.6 20L21 16.4V2L15.6 5.6L9.3 2L3 5.6Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.3 16.4L3 20V5.6L9.3 2M9.3 16.4L15.6 20M9.3 16.4V2M15.6 20L21 16.4V2L15.6 5.6M15.6 20V5.6M15.6 5.6L9.3 2"
    })
  ]))
}