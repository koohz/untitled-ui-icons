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
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18.4 13.8C18.4 17.7765 15.1764 21 11.2 21C7.22355 21 4 17.7765 4 13.8C4 12.8452 4.18586 11.9338 4.52337 11.1C5.59146 8.46135 11.2 3 11.2 3C11.2 3 16.8085 8.46135 17.8766 11.1C18.2141 11.9338 18.4 12.8452 18.4 13.8Z"
    })
  ]))
}