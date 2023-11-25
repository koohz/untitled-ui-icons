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
      d: "M12 7.4V14.6M12 7.4V2M12 7.4L7.5 2.9M12 7.4L16.5 2.9M12 14.6V20M12 14.6L7.5 19.1M12 14.6L16.5 19.1M15.6 11H8.4M15.6 11H21M15.6 11L20.1 6.5M15.6 11L20.1 15.5M8.4 11H3M8.4 11L3.9 6.5M8.4 11L3.9 15.5"
    })
  ]))
}