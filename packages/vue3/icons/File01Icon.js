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
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 7.32C4 5.80786 4 5.05179 4.29428 4.47423C4.55314 3.96619 4.96619 3.55314 5.47423 3.29428C6.05179 3 6.80786 3 8.32 3H14.08C15.5921 3 16.3482 3 16.9258 3.29428C17.4338 3.55314 17.8469 3.96619 18.1057 4.47423C18.4 5.05179 18.4 5.80786 18.4 7.32V16.68C18.4 18.1921 18.4 18.9482 18.1057 19.5258C17.8469 20.0338 17.4338 20.4469 16.9258 20.7057C16.3482 21 15.5921 21 14.08 21H8.32C6.80786 21 6.05179 21 5.47423 20.7057C4.96619 20.4469 4.55314 20.0338 4.29428 19.5258C4 18.9482 4 18.1921 4 16.68V7.32Z"
    })
  ]))
}