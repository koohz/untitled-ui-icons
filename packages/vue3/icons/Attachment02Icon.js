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
      d: "M16.4 5.93023V16.05C16.4 18.7838 14.1838 21 11.45 21C8.71619 21 6.5 18.7838 6.5 16.05V6.3C6.5 4.47746 7.97746 3 9.8 3C11.6225 3 13.1 4.47746 13.1 6.3V16.0012C13.1 16.9124 12.3613 17.6512 11.45 17.6512C10.5387 17.6512 9.8 16.9124 9.8 16.0012V7.18605"
    })
  ]))
}