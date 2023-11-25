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
      d: "M10.9999 8.4L7.39994 12L10.9999 15.6"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18.7958 16.5C17.2397 19.1901 14.3311 21 10.9999 21C6.02931 21 1.99988 16.9706 1.99988 12C1.99988 7.02944 6.02931 3 10.9999 3C14.3311 3 17.2397 4.80989 18.7958 7.5M10.9999 8.4L7.39994 12M7.39994 12L10.9999 15.6M7.39994 12H19.9999"
    })
  ]))
}