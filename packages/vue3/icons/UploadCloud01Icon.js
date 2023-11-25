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
      d: "M4.8 14.918C3.71461 14.1915 3 12.9542 3 11.55C3 9.44079 4.61236 7.70816 6.67177 7.51743C7.09303 4.95492 9.31822 3 12 3C14.6818 3 16.907 4.95492 17.3282 7.51743C19.3876 7.70816 21 9.44079 21 11.55C21 12.9542 20.2854 14.1915 19.2 14.918M8.4 14.7L12 11.1M12 11.1L15.6 14.7M12 11.1V19.2"
    })
  ]))
}