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
      d: "M8.74487 20.1C9.37949 20.6601 10.2131 21 11.1261 21C12.0391 21 12.8727 20.6601 13.5074 20.1M16.5261 8.4V3M13.8261 5.7H19.2261M12.0261 3.0755C11.7307 3.02557 11.4297 3 11.1261 3C9.69395 3 8.32044 3.56893 7.30774 4.58162C6.29504 5.59432 5.72612 6.96783 5.72612 8.4C5.72612 11.1812 5.02454 13.0854 4.24081 14.3449C3.57973 15.4073 3.24919 15.9385 3.26131 16.0867C3.27473 16.2508 3.30949 16.3133 3.44171 16.4114C3.56113 16.5 4.09945 16.5 5.17608 16.5H17.0761C18.1527 16.5 18.691 16.5 18.8104 16.4114C18.9427 16.3133 18.9774 16.2508 18.9909 16.0867C19.003 15.9385 18.6724 15.4072 18.0113 14.3447C17.5684 13.6329 17.1518 12.7153 16.8732 11.55"
    })
  ]))
}