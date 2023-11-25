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
      d: "M17.4 7.5L21 11.1L17.4 14.7"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17.4 7.5L21 11.1M21 11.1L17.4 14.7M21 11.1H9.3M14.7 4.08364C13.5527 3.39445 12.2207 3 10.8 3C6.49218 3 3 6.62649 3 11.1C3 15.5735 6.49218 19.2 10.8 19.2C12.2207 19.2 13.5527 18.8056 14.7 18.1164"
    })
  ]))
}