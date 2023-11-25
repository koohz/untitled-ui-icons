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
      d: "M3 10.15C3 8.4103 4.4103 7 6.15 7H17.85C19.5897 7 21 8.4103 21 10.15C21 11.8897 19.5897 13.3 17.85 13.3H6.15C4.4103 13.3 3 11.8897 3 10.15Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M3 16.45C3 14.7103 4.4103 13.3 6.15 13.3H17.85C19.5897 13.3 21 14.7103 21 16.45C21 18.1897 19.5897 19.6 17.85 19.6H6.15C4.4103 19.6 3 18.1897 3 16.45Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 9.7L20.573 6.28417C20.4055 4.94442 20.3218 4.27452 20.0065 3.76972C19.7287 3.32496 19.3275 2.97071 18.8517 2.75024C18.3117 2.5 17.6366 2.5 16.2864 2.5H7.71362C6.36343 2.5 5.68833 2.5 5.14832 2.75024C4.67254 2.97071 4.27125 3.32496 3.99347 3.76972C3.67818 4.27452 3.59445 4.94441 3.42698 6.28417L3 9.7M6.15 13.3H17.85M6.15 13.3C4.4103 13.3 3 11.8897 3 10.15C3 8.4103 4.4103 7 6.15 7H17.85C19.5897 7 21 8.4103 21 10.15C21 11.8897 19.5897 13.3 17.85 13.3M6.15 13.3C4.4103 13.3 3 14.7103 3 16.45C3 18.1897 4.4103 19.6 6.15 19.6H17.85C19.5897 19.6 21 18.1897 21 16.45C21 14.7103 19.5897 13.3 17.85 13.3M6.6 10.15H6.609M6.6 16.45H6.609M12 10.15H17.4M12 16.45H17.4"
    })
  ]))
}