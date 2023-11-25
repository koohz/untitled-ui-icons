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
      d: "M7.95 4.25C7.95 3.00736 8.95736 2 10.2 2C11.4426 2 12.45 3.00736 12.45 4.25V5.6H13.35C14.608 5.6 15.2371 5.6 15.7332 5.80552C16.3948 6.07956 16.9204 6.60518 17.1945 7.26675C17.4 7.76294 17.4 8.39196 17.4 9.65H18.75C19.9926 9.65 21 10.6574 21 11.9C21 13.1426 19.9926 14.15 18.75 14.15H17.4V15.68C17.4 17.1921 17.4 17.9482 17.1057 18.5258C16.8469 19.0338 16.4338 19.4469 15.9258 19.7057C15.3482 20 14.5921 20 13.08 20H12.45V18.425C12.45 17.3066 11.5434 16.4 10.425 16.4C9.30662 16.4 8.4 17.3066 8.4 18.425V20H7.32C5.80786 20 5.05179 20 4.47423 19.7057C3.96619 19.4469 3.55314 19.0338 3.29428 18.5258C3 17.9482 3 17.1921 3 15.68V14.15H4.35C5.59264 14.15 6.6 13.1426 6.6 11.9C6.6 10.6574 5.59264 9.65 4.35 9.65H3C3 8.39196 3 7.76294 3.20553 7.26675C3.47956 6.60518 4.00518 6.07956 4.66675 5.80552C5.16294 5.6 5.79196 5.6 7.05 5.6H7.95V4.25Z"
    })
  ]))
}