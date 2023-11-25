const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11.55 3H13.98C15.4921 3 16.2482 3 16.8258 3.29428C17.3338 3.55314 17.7469 3.96619 18.0057 4.47423C18.3 5.05179 18.3 5.80786 18.3 7.32V16.68C18.3 18.1921 18.3 18.9482 18.0057 19.5258C17.7469 20.0338 17.3338 20.4469 16.8258 20.7057C16.2482 21 15.4921 21 13.98 21H8.22C6.70786 21 5.95179 21 5.37423 20.7057C4.86619 20.4469 4.45314 20.0338 4.19428 19.5258C3.9 18.9482 3.9 18.1921 3.9 16.68V16.05M14.7 12.9H10.65M14.7 9.3H11.55M14.7 16.5H7.5M5.7 10.2V5.25C5.7 4.50442 6.30442 3.9 7.05 3.9C7.79558 3.9 8.4 4.50442 8.4 5.25V10.2C8.4 11.6912 7.19117 12.9 5.7 12.9C4.20883 12.9 3 11.6912 3 10.2V6.6"
    })
  ]))
}