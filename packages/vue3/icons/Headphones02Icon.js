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
      d: "M5.7 14.25C5.7 13.0074 6.70736 12 7.95 12C9.19264 12 10.2 13.0074 10.2 14.25V16.95C10.2 18.1926 9.19264 19.2 7.95 19.2C6.70736 19.2 5.7 18.1926 5.7 16.95V14.25Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M13.8 14.25C13.8 13.0074 14.8074 12 16.05 12C17.2926 12 18.3 13.0074 18.3 14.25V16.95C18.3 18.1926 17.2926 19.2 16.05 19.2C14.8074 19.2 13.8 18.1926 13.8 16.95V14.25Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 15.6V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V15.6M7.95 19.2C6.70736 19.2 5.7 18.1926 5.7 16.95V14.25C5.7 13.0074 6.70736 12 7.95 12C9.19264 12 10.2 13.0074 10.2 14.25V16.95C10.2 18.1926 9.19264 19.2 7.95 19.2ZM16.05 19.2C14.8074 19.2 13.8 18.1926 13.8 16.95V14.25C13.8 13.0074 14.8074 12 16.05 12C17.2926 12 18.3 13.0074 18.3 14.25V16.95C18.3 18.1926 17.2926 19.2 16.05 19.2Z"
    })
  ]))
}