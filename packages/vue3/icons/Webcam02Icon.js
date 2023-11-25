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
      d: "M11.15 18.3C15.375 18.3 18.8 14.875 18.8 10.65C18.8 6.42502 15.375 3 11.15 3C6.92502 3 3.5 6.42502 3.5 10.65C3.5 14.875 6.92502 18.3 11.15 18.3Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M11.15 13.5188C12.7344 13.5188 14.0188 12.2344 14.0188 10.65C14.0188 9.06563 12.7344 7.78125 11.15 7.78125C9.56563 7.78125 8.28125 9.06563 8.28125 10.65C8.28125 12.2344 9.56563 13.5188 11.15 13.5188Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.55 21H14.75M18.8 10.65C18.8 14.875 15.375 18.3 11.15 18.3C6.92502 18.3 3.5 14.875 3.5 10.65C3.5 6.42502 6.92502 3 11.15 3C15.375 3 18.8 6.42502 18.8 10.65ZM14.0188 10.65C14.0188 12.2344 12.7344 13.5187 11.15 13.5187C9.56563 13.5187 8.28125 12.2344 8.28125 10.65C8.28125 9.06563 9.56563 7.78125 11.15 7.78125C12.7344 7.78125 14.0188 9.06563 14.0188 10.65Z"
    })
  ]))
}