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
      d: "M15.6 11V18.2M8.4 11V18.2M12 12.8V20M19.2 13.918C20.2854 13.1915 21 11.9542 21 10.55C21 8.44079 19.3876 6.70816 17.3282 6.51743C16.907 3.95492 14.6818 2 12 2C9.31822 2 7.09303 3.95492 6.67177 6.51743C4.61236 6.70816 3 8.44079 3 10.55C3 11.9542 3.71461 13.1915 4.8 13.918"
    })
  ]))
}