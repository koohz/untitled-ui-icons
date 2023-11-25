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
      d: "M12 19.2C15.9765 19.2 19.2 15.9765 19.2 12C19.2 8.02355 15.9765 4.8 12 4.8C8.02355 4.8 4.8 8.02355 4.8 12C4.8 15.9765 8.02355 19.2 12 19.2Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 12H17.4M6.6 12H3M12 6.6V3M12 21V17.4M19.2 12C19.2 15.9765 15.9765 19.2 12 19.2C8.02355 19.2 4.8 15.9765 4.8 12C4.8 8.02355 8.02355 4.8 12 4.8C15.9765 4.8 19.2 8.02355 19.2 12Z"
    })
  ]))
}