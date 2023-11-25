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
      d: "M12 20C16.9706 20 21 15.9706 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11C3 15.9706 7.02944 20 12 20Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M15.6 11L12 7.4L8.4 11L12 14.6L15.6 11Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 11H19.2M21 11C21 15.9706 16.9706 20 12 20M21 11C21 6.02944 16.9706 2 12 2M18.364 17.364L17.0912 16.0912M4.8 11H3M3 11C3 15.9706 7.02944 20 12 20M3 11C3 6.02944 7.02944 2 12 2M6.90883 5.90883L5.63604 4.63604M12 3.8V2M17.0912 5.90883L18.364 4.63604M12 20V18.2M5.63604 17.364L6.90883 16.0912M12 7.4L15.6 11L12 14.6L8.4 11L12 7.4Z"
    })
  ]))
}