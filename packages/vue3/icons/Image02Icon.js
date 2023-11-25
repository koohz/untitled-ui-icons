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
      d: "M8.85 9.65C9.84411 9.65 10.65 8.84411 10.65 7.85C10.65 6.85589 9.84411 6.05 8.85 6.05C7.85589 6.05 7.05 6.85589 7.05 7.85C7.05 8.84411 7.85589 9.65 8.85 9.65Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M12 20C16.9706 20 21 15.9706 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11C3 15.9706 7.02944 20 12 20Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6.59962 18.2004L14.5818 10.2182C14.9382 9.86182 15.1164 9.68361 15.3219 9.61684C15.5026 9.55811 15.6974 9.55811 15.8781 9.61684C16.0836 9.68361 16.2618 9.86182 16.6182 10.2182L20.4647 14.0647M10.65 7.85C10.65 8.84411 9.84411 9.65 8.85 9.65C7.85589 9.65 7.05 8.84411 7.05 7.85C7.05 6.85589 7.85589 6.05 8.85 6.05C9.84411 6.05 10.65 6.85589 10.65 7.85ZM21 11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11Z"
    })
  ]))
}