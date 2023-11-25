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
      d: "M15.6 10.9999L12 7.39994L8.4 10.9999"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.5 18.7958C4.80989 17.2397 3 14.3311 3 10.9999C3 6.02931 7.02944 1.99988 12 1.99988C16.9706 1.99988 21 6.02932 21 10.9999C21 14.3311 19.1901 17.2397 16.5 18.7958M15.6 10.9999L12 7.39994M12 7.39994L8.4 10.9999M12 7.39994V19.9999"
    })
  ]))
}