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
      d: "M15.6 3L19.2 6.6L15.6 10.2"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M6.6 21L3 17.4L6.6 13.8"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15.6 3L19.2 6.6M19.2 6.6L15.6 10.2M19.2 6.6H7.32C5.80786 6.6 5.05179 6.6 4.47423 6.89428C3.96619 7.15314 3.55314 7.56619 3.29428 8.07423C3 8.65179 3 9.40786 3 10.92V11.1M3 17.4H14.88C16.3921 17.4 17.1482 17.4 17.7258 17.1057C18.2338 16.8469 18.6469 16.4338 18.9057 15.9258C19.2 15.3482 19.2 14.5921 19.2 13.08V12.9M3 17.4L6.6 21M3 17.4L6.6 13.8"
    })
  ]))
}