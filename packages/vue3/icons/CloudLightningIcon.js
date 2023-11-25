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
      d: "M12.9 9.2L9.3 14.6H14.7L11.1 20"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18.3 14.3695C19.873 13.8136 21 12.3134 21 10.55C21 8.44079 19.3876 6.70816 17.3282 6.51743C16.907 3.95492 14.6818 2 12 2C9.31822 2 7.09303 3.95492 6.67177 6.51743C4.61236 6.70816 3 8.44079 3 10.55C3 12.3134 4.12699 13.8136 5.7 14.3695M12.9 9.2L9.3 14.6H14.7L11.1 20"
    })
  ]))
}