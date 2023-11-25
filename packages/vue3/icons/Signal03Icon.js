const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.7272 12.2728C10.0243 11.5698 10.0243 10.4302 10.7272 9.72721C11.4302 9.02426 12.5698 9.02426 13.2728 9.72721C13.9757 10.4302 13.9757 11.5698 13.2728 12.2728M8.18162 14.8184C6.07279 12.7095 6.07279 9.29045 8.18162 7.18162C10.2905 5.07279 13.7095 5.07279 15.8184 7.18162C17.9272 9.29045 17.9272 12.7095 15.8184 14.8184M5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364"
    })
  ]))
}