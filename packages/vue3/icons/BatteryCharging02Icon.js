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
      d: "M9.75 16.8L13.35 11.4H7.95L11.55 6"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.75 16.8L13.35 11.4H7.95L11.55 6M21 12.3V10.5M13.8 16.8H13.98C15.4921 16.8 16.2482 16.8 16.8258 16.5057C17.3338 16.2469 17.7469 15.8338 18.0057 15.3258C18.3 14.7482 18.3 13.9921 18.3 12.48V9.6C18.3 8.76303 18.3 8.34454 18.208 8.00119C17.9583 7.06944 17.2306 6.34166 16.2988 6.092C15.9555 6 15.537 6 14.7 6M7.5 6H7.32C5.80786 6 5.05179 6 4.47423 6.29428C3.96619 6.55314 3.55314 6.96619 3.29428 7.47423C3 8.05179 3 8.80786 3 10.32V13.2C3 14.037 3 14.4555 3.092 14.7988C3.34166 15.7306 4.06944 16.4583 5.00119 16.708C5.34454 16.8 5.76303 16.8 6.6 16.8"
    })
  ]))
}