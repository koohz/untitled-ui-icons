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
      d: "M5.7 8.3L3 11L5.7 13.7"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M9.3 4.7L12 2L14.7 4.7"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M14.7 17.3L12 20L9.3 17.3"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M18.3 8.3L21 11L18.3 13.7"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5.7 8.3L3 11M3 11L5.7 13.7M3 11H21M9.3 4.7L12 2M12 2L14.7 4.7M12 2V20M14.7 17.3L12 20M12 20L9.3 17.3M18.3 8.3L21 11M21 11L18.3 13.7"
    })
  ]))
}