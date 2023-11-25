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
      d: "M11 15.6L14.6 12L11 8.4"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3.2041 7.5C4.76024 4.80989 7.66879 3 11.0001 3C15.9706 3 20.0001 7.02944 20.0001 12C20.0001 16.9706 15.9706 21 11.0001 21C7.66879 21 4.76024 19.1901 3.2041 16.5M11 15.6L14.6 12M14.6 12L11 8.4M14.6 12H2"
    })
  ]))
}