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
      d: "M11.1 2L13.8 4.7L11.1 7.4"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M12.9 20L10.2 17.3L12.9 14.6"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11.1 2L13.8 4.7M13.8 4.7L11.1 7.4M13.8 4.7H7.32C5.80786 4.7 5.05179 4.7 4.47423 4.99428C3.96619 5.25314 3.55314 5.66619 3.29428 6.17423C3 6.75179 3 7.50786 3 9.02V14.15C3 14.568 3 14.777 3.0231 14.9524C3.18261 16.164 4.136 17.1174 5.34758 17.2769C5.52303 17.3 5.73202 17.3 6.15 17.3M10.2 17.3H16.68C18.1921 17.3 18.9482 17.3 19.5258 17.0057C20.0338 16.7469 20.4469 16.3338 20.7057 15.8258C21 15.2482 21 14.4921 21 12.98V7.85C21 7.43202 21 7.22303 20.9769 7.04758C20.8174 5.836 19.864 4.88261 18.6524 4.7231C18.477 4.7 18.268 4.7 17.85 4.7M10.2 17.3L12.9 20M10.2 17.3L12.9 14.6"
    })
  ]))
}