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
      d: "M12 14.6C13.9882 14.6 15.6 12.9882 15.6 11C15.6 9.01178 13.9882 7.4 12 7.4C10.0118 7.4 8.4 9.01178 8.4 11C8.4 12.9882 10.0118 14.6 12 14.6Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 2L4.8 3.8M21 2L19.2 3.8M21 20L19.2 18.2M3 20L4.8 18.2M3 14.6H4.35M8.4 2V3.35M21 7.4H19.65M15.6 20V18.65M17.4 14.6H20.55M15.6 2V5.6M3 7.4H6.6M8.4 20V16.4M15.6 11C15.6 12.9882 13.9882 14.6 12 14.6C10.0118 14.6 8.4 12.9882 8.4 11C8.4 9.01177 10.0118 7.4 12 7.4C13.9882 7.4 15.6 9.01177 15.6 11Z"
    })
  ]))
}