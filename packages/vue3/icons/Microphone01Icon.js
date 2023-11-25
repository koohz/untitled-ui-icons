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
      d: "M8.6 5.7C8.6 4.20883 9.80883 3 11.3 3C12.7912 3 14 4.20883 14 5.7V12C14 13.4912 12.7912 14.7 11.3 14.7C9.80883 14.7 8.6 13.4912 8.6 12V5.7Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17.6 10.2V12C17.6 15.4794 14.7794 18.3 11.3 18.3M5 10.2V12C5 15.4794 7.82061 18.3 11.3 18.3M11.3 18.3V21M7.7 21H14.9M11.3 14.7C9.80883 14.7 8.6 13.4912 8.6 12V5.7C8.6 4.20883 9.80883 3 11.3 3C12.7912 3 14 4.20883 14 5.7V12C14 13.4912 12.7912 14.7 11.3 14.7Z"
    })
  ]))
}