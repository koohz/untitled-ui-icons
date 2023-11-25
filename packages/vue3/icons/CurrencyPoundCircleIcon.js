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
      d: "M12 20C16.9706 20 21 15.9706 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11C3 15.9706 7.02944 20 12 20Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M14.7 15.95H9.3C9.3 15.95 11.1 13.9199 11.1 11.45C11.1 10.1 10.1233 9.63801 10.1058 8.26583C10.1069 5.54963 13.3768 5.69405 14.5133 6.77362"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 15.95H9.3C9.3 15.95 11.1 13.9199 11.1 11.45C11.1 10.1 10.1233 9.63801 10.1058 8.26583C10.1069 5.54963 13.3768 5.69405 14.5133 6.77362M9.3 11.45H13.8M21 11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11Z"
    })
  ]))
}