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
      d: "M12 2C7.02944 2 3 6.02944 3 11C3 11 4.25084 10.1 5.7 10.1C7.14916 10.1 8.4 11 8.4 11C8.4 11 10.5508 10.1 12 10.1C13.4492 10.1 15.6 11 15.6 11C15.6 11 16.8508 10.1 18.3 10.1C19.7492 10.1 21 11 21 11C21 6.02944 16.9706 2 12 2Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.5 17.66C7.5 18.9523 8.50736 20 9.75 20C10.9926 20 12 18.9523 12 17.66V10.1M12 10.1C10.5508 10.1 8.4 11 8.4 11C8.4 11 7.14916 10.1 5.7 10.1C4.25084 10.1 3 11 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11C21 11 19.7492 10.1 18.3 10.1C16.8508 10.1 15.6 11 15.6 11C15.6 11 13.4492 10.1 12 10.1Z"
    })
  ]))
}