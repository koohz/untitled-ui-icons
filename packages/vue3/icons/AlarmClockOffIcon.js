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
      d: "M21 5.7L18.3 3L21 5.7Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M6.6 17.4L4.8 19.2L6.6 17.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.65 4.92766C11.0919 4.84331 11.5437 4.8 12 4.8C13.9096 4.8 15.7409 5.55857 17.0912 6.90883C18.4414 8.25909 19.2 10.0904 19.2 12C19.2 12.4563 19.1567 12.9081 19.0723 13.35M17.522 16.6204C17.386 16.783 17.2423 16.9401 17.0912 17.0912C15.7409 18.4414 13.9096 19.2 12 19.2C10.0904 19.2 8.25909 18.4414 6.90883 17.0912C5.55857 15.7409 4.8 13.9096 4.8 12C4.8 10.0904 5.55857 8.25909 6.90883 6.90883C7.05853 6.75913 7.21414 6.61671 7.37511 6.48179M4.8 3.9L3 5.7M21 5.7L18.3 3M6.6 17.4L4.8 19.2M20.1 19.2L3.9 3"
    })
  ]))
}