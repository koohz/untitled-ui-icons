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
      d: "M11 22.4L13 20.4L11 18.4"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M13 5.59998L11 3.59998L13 1.59998"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 18.8746C19.1213 17.329 20.5 14.8255 20.5 12C20.5 7.30555 16.6944 3.49998 12 3.49998H11.5M12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 9.17444 4.87867 6.67091 7 5.12537M11 22.4L13 20.4L11 18.4M13 5.59998L11 3.59998L13 1.59998"
    })
  ]))
}