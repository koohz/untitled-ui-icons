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
      d: "M3 11.4C3 8.41766 5.41766 6 8.4 6H15.6C18.5823 6 21 8.41766 21 11.4C21 14.3823 18.5823 16.8 15.6 16.8H8.4C5.41766 16.8 3 14.3823 3 11.4Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M8.4 13.65C9.64264 13.65 10.65 12.6426 10.65 11.4C10.65 10.1574 9.64264 9.15 8.4 9.15C7.15736 9.15 6.15 10.1574 6.15 11.4C6.15 12.6426 7.15736 13.65 8.4 13.65Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 11.4C3 8.41766 5.41766 6 8.4 6H15.6C18.5823 6 21 8.41766 21 11.4C21 14.3823 18.5823 16.8 15.6 16.8H8.4C5.41766 16.8 3 14.3823 3 11.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8.4 13.65C9.64264 13.65 10.65 12.6426 10.65 11.4C10.65 10.1574 9.64264 9.15 8.4 9.15C7.15736 9.15 6.15 10.1574 6.15 11.4C6.15 12.6426 7.15736 13.65 8.4 13.65Z"
    })
  ]))
}