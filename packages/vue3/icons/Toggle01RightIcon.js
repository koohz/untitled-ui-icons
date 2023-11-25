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
      d: "M3 11.5C3 9.01472 5.01472 7 7.5 7H16.5C18.9853 7 21 9.01472 21 11.5C21 13.9853 18.9853 16 16.5 16H7.5C5.01472 16 3 13.9853 3 11.5Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M16.5 16C18.9853 16 21 13.9853 21 11.5C21 9.01472 18.9853 7 16.5 7C14.0147 7 12 9.01472 12 11.5C12 13.9853 14.0147 16 16.5 16Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M16.5 16H7.5C5.01472 16 3 13.9853 3 11.5C3 9.01472 5.01472 7 7.5 7H16.5M16.5 16C18.9853 16 21 13.9853 21 11.5C21 9.01472 18.9853 7 16.5 7M16.5 16C14.0147 16 12 13.9853 12 11.5C12 9.01472 14.0147 7 16.5 7"
    })
  ]))
}