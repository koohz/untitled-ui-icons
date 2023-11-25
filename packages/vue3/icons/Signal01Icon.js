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
      d: "M12 13.0929C12.9941 13.0929 13.8 12.287 13.8 11.2929C13.8 10.2988 12.9941 9.49292 12 9.49292C11.0059 9.49292 10.2 10.2988 10.2 11.2929C10.2 12.287 11.0059 13.0929 12 13.0929Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15.8184 7.47454C17.9272 9.58337 17.9272 13.0025 15.8184 15.1113M8.18162 15.1113C6.07279 13.0024 6.07279 9.58334 8.18162 7.47451M5.63604 17.6569C2.12132 14.1422 2.12132 8.44367 5.63604 4.92896M18.364 4.929C21.8787 8.44372 21.8787 14.1422 18.364 17.6569M13.8 11.2929C13.8 12.287 12.9941 13.0929 12 13.0929C11.0059 13.0929 10.2 12.287 10.2 11.2929C10.2 10.2988 11.0059 9.49292 12 9.49292C12.9941 9.49292 13.8 10.2988 13.8 11.2929Z"
    })
  ]))
}