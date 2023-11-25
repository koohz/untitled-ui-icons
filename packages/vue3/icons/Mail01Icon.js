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
      d: "M3 8.32C3 6.80786 3 6.05179 3.29428 5.47423C3.55314 4.96619 3.96619 4.55314 4.47423 4.29428C5.05179 4 5.80786 4 7.32 4H16.68C18.1921 4 18.9482 4 19.5258 4.29428C20.0338 4.55314 20.4469 4.96619 20.7057 5.47423C21 6.05179 21 6.80786 21 8.32V14.08C21 15.5921 21 16.3482 20.7057 16.9258C20.4469 17.4338 20.0338 17.8469 19.5258 18.1057C18.9482 18.4 18.1921 18.4 16.68 18.4H7.32C5.80786 18.4 5.05179 18.4 4.47423 18.1057C3.96619 17.8469 3.55314 17.4338 3.29428 16.9258C3 16.3482 3 15.5921 3 14.08V8.32Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 6.7L10.3484 11.8439C10.9435 12.2604 11.241 12.4687 11.5646 12.5494C11.8505 12.6206 12.1495 12.6206 12.4354 12.5494C12.759 12.4687 13.0565 12.2604 13.6516 11.8439L21 6.7M7.32 18.4H16.68C18.1921 18.4 18.9482 18.4 19.5258 18.1057C20.0338 17.8469 20.4469 17.4338 20.7057 16.9258C21 16.3482 21 15.5921 21 14.08V8.32C21 6.80786 21 6.05179 20.7057 5.47423C20.4469 4.96619 20.0338 4.55314 19.5258 4.29428C18.9482 4 18.1921 4 16.68 4H7.32C5.80786 4 5.05179 4 4.47423 4.29428C3.96619 4.55314 3.55314 4.96619 3.29428 5.47423C3 6.05179 3 6.80786 3 8.32V14.08C3 15.5921 3 16.3482 3.29428 16.9258C3.55314 17.4338 3.96619 17.8469 4.47423 18.1057C5.05179 18.4 5.80786 18.4 7.32 18.4Z"
    })
  ]))
}