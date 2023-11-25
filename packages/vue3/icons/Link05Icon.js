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
      d: "M16.5 16H15.4C15.0134 16 14.7 15.6866 14.7 15.3V7.7C14.7 7.3134 15.0134 7 15.4 7H16.5C18.9853 7 21 9.01472 21 11.5C21 13.9853 18.9853 16 16.5 16Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.3 16H7.5C5.01472 16 3 13.9853 3 11.5C3 9.01472 5.01472 7 7.5 7H9.3M8.4 11.5L17.4 11.5M15.4 16H16.5C18.9853 16 21 13.9853 21 11.5C21 9.01472 18.9853 7 16.5 7H15.4C15.0134 7 14.7 7.3134 14.7 7.7V15.3C14.7 15.6866 15.0134 16 15.4 16Z"
    })
  ]))
}