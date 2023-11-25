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
      d: "M4 7.32C4 5.80786 4 5.05179 4.29428 4.47423C4.55314 3.96619 4.96619 3.55314 5.47423 3.29428C6.05179 3 6.80786 3 8.32 3H13L18.4 8.4V16.68C18.4 18.1921 18.4 18.9482 18.1057 19.5258C17.8469 20.0338 17.4338 20.4469 16.9258 20.7057C16.3482 21 15.5921 21 14.08 21H8.32C6.80786 21 6.05179 21 5.47423 20.7057C4.96619 20.4469 4.55314 20.0338 4.29428 19.5258C4 18.9482 4 18.1921 4 16.68V7.32Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M13 3V8.4H18.4"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M11.2 17.4C11.2 17.4 13.9 16.1131 13.9 14.1827V11.9306L11.9312 11.2271C11.4581 11.0576 10.9408 11.0576 10.4678 11.2271L8.5 11.9306V14.1827C8.5 16.1131 11.2 17.4 11.2 17.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 3H8.32C6.80786 3 6.05179 3 5.47423 3.29428C4.96619 3.55314 4.55314 3.96619 4.29428 4.47423C4 5.05179 4 5.80786 4 7.32V16.68C4 18.1921 4 18.9482 4.29428 19.5258C4.55314 20.0338 4.96619 20.4469 5.47423 20.7057C6.05179 21 6.80786 21 8.32 21H14.08C15.5921 21 16.3482 21 16.9258 20.7057C17.4338 20.4469 17.8469 20.0338 18.1057 19.5258C18.4 18.9482 18.4 18.1921 18.4 16.68V8.4M13 3L18.4 8.4M13 3V8.4H18.4M11.2 17.4C11.2 17.4 13.9 16.1131 13.9 14.1827V11.9306L11.9312 11.2271C11.4581 11.0576 10.9408 11.0576 10.4678 11.2271L8.5 11.9306V14.1827C8.5 16.1131 11.2 17.4 11.2 17.4Z"
    })
  ]))
}