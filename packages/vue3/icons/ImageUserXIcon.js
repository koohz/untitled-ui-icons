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
      d: "M10.2 12.35C12.1882 12.35 13.8 10.7382 13.8 8.75C13.8 6.76177 12.1882 5.15 10.2 5.15C8.21177 5.15 6.6 6.76177 6.6 8.75C6.6 10.7382 8.21177 12.35 10.2 12.35Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M16.05 2.45L20.55 6.95M20.55 2.45L16.05 6.95M21 11V15.68C21 17.1921 21 17.9482 20.7057 18.5258C20.4469 19.0338 20.0338 19.4469 19.5258 19.7057C18.9482 20 18.1921 20 16.68 20H7.32C5.80786 20 5.05179 20 4.47423 19.7057C3.96619 19.4469 3.55314 19.0338 3.29428 18.5258C3 17.9482 3 17.1921 3 15.68V6.32C3 4.80786 3 4.05179 3.29428 3.47423C3.55314 2.96619 3.96619 2.55314 4.47423 2.29428C5.05179 2 5.80786 2 7.32 2H12M3.13096 18.1337C3.55319 16.6147 4.94631 15.5 6.59979 15.5H12.8998C13.7362 15.5 14.1544 15.5 14.5021 15.5692C15.9302 15.8532 17.0466 16.9696 17.3306 18.3977C17.3998 18.7454 17.3998 19.1636 17.3998 20M13.8 8.75C13.8 10.7382 12.1882 12.35 10.2 12.35C8.21177 12.35 6.6 10.7382 6.6 8.75C6.6 6.76177 8.21177 5.15 10.2 5.15C12.1882 5.15 13.8 6.76177 13.8 8.75Z"
    })
  ]))
}