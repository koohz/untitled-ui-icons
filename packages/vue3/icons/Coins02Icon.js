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
      d: "M9.3 20C12.7794 20 15.6 17.1794 15.6 13.7C15.6 10.2206 12.7794 7.4 9.3 7.4C5.82061 7.4 3 10.2206 3 13.7C3 17.1794 5.82061 20 9.3 20Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M7.95 11.9L9.3 11V15.95"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M7.95 15.95H10.65H7.95Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15.544 14.544C18.6243 14.1316 21 11.4932 21 8.3C21 4.82061 18.1794 2 14.7 2C11.5068 2 8.86844 4.3757 8.45604 7.45604M7.95 11.9L9.3 11V15.95M7.95 15.95H10.65M15.6 13.7C15.6 17.1794 12.7794 20 9.3 20C5.82061 20 3 17.1794 3 13.7C3 10.2206 5.82061 7.4 9.3 7.4C12.7794 7.4 15.6 10.2206 15.6 13.7Z"
    })
  ]))
}