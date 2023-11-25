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
      d: "M12 16.4C14.9823 16.4 17.4 13.9823 17.4 11C17.4 8.01766 14.9823 5.6 12 5.6C9.01766 5.6 6.6 8.01766 6.6 11C6.6 13.9823 9.01766 16.4 12 16.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.2 16.0927V18.2C10.2 19.1941 11.0059 20 12 20C12.9941 20 13.8 19.1941 13.8 18.2V16.0927M12 2V2.9M3.9 11H3M6.15 5.15L5.60991 4.60991M17.85 5.15L18.3902 4.60991M21 11H20.1M17.4 11C17.4 13.9823 14.9823 16.4 12 16.4C9.01766 16.4 6.6 13.9823 6.6 11C6.6 8.01766 9.01766 5.6 12 5.6C14.9823 5.6 17.4 8.01766 17.4 11Z"
    })
  ]))
}