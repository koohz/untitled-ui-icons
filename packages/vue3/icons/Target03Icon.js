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
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M12 14.7C13.4912 14.7 14.7 13.4912 14.7 12C14.7 10.5088 13.4912 9.3 12 9.3C10.5088 9.3 9.3 10.5088 9.3 12C9.3 13.4912 10.5088 14.7 12 14.7Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 12H17.4M6.6 12H3M12 6.6V3M12 21V17.4M19.2 12C19.2 15.9765 15.9765 19.2 12 19.2C8.02355 19.2 4.8 15.9765 4.8 12C4.8 8.02355 8.02355 4.8 12 4.8C15.9765 4.8 19.2 8.02355 19.2 12ZM14.7 12C14.7 13.4912 13.4912 14.7 12 14.7C10.5088 14.7 9.3 13.4912 9.3 12C9.3 10.5088 10.5088 9.3 12 9.3C13.4912 9.3 14.7 10.5088 14.7 12Z"
    })
  ]))
}