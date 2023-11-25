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
      d: "M3 11C3 15.9706 7.02944 20 12 20V2C7.02944 2 3 6.02944 3 11Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2C12.5325 2 13.0542 2.04625 13.5613 2.13494M12 2C7.02944 2 3 6.02944 3 11C3 15.9706 7.02944 20 12 20M12 2V20M17.1642 3.6281C18.023 4.23082 18.7717 4.97981 19.374 5.83886M20.8651 9.43907C20.9538 9.94605 21 10.4676 21 11C21 11.5324 20.9538 12.0539 20.8651 12.5609M19.3702 16.1665C18.7683 17.0237 18.0206 17.771 17.1632 18.3726M13.5595 19.8654C13.053 19.9539 12.5319 20 12 20"
    })
  ]))
}