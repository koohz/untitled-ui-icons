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
      d: "M11.0052 3C6.52283 3 2.80578 6.27682 2.11889 10.5656C2.05185 10.9842 2.01833 11.1935 2.1025 11.4171C2.16946 11.595 2.33342 11.7873 2.49846 11.8815C2.7059 12 2.95234 12 3.44522 12H18.5652C19.0581 12 19.3045 12 19.512 11.8815C19.677 11.7873 19.841 11.595 19.9079 11.4171C19.9921 11.1935 19.9586 10.9842 19.8915 10.5656C19.2047 6.27682 15.4876 3 11.0052 3Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15.5052 18.66C15.5052 19.9523 14.4979 21 13.2552 21C12.0126 21 11.0052 19.9523 11.0052 18.66V12M2.11889 10.5656C2.80578 6.27682 6.52283 3 11.0052 3C15.4876 3 19.2047 6.27682 19.8915 10.5656C19.9586 10.9842 19.9921 11.1935 19.9079 11.4171C19.841 11.595 19.677 11.7873 19.512 11.8815C19.3045 12 19.0581 12 18.5652 12H3.44522C2.95234 12 2.7059 12 2.49846 11.8815C2.33342 11.7873 2.16946 11.595 2.1025 11.4171C2.01833 11.1935 2.05185 10.9842 2.11889 10.5656Z"
    })
  ]))
}