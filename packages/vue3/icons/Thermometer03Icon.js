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
      d: "M9.8 5.25C9.8 4.00736 8.79264 3 7.55 3C6.30736 3 5.3 4.00736 5.3 5.25V13.582C4.21461 14.3085 3.5 15.5458 3.5 16.95C3.5 19.1868 5.31325 21 7.55 21C9.78675 21 11.6 19.1868 11.6 16.95C11.6 15.5458 10.8854 14.3085 9.8 13.582V5.25Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M7.55 17.85C8.04706 17.85 8.45 17.4471 8.45 16.95C8.45 16.4529 8.04706 16.05 7.55 16.05C7.05294 16.05 6.65 16.4529 6.65 16.95C6.65 17.4471 7.05294 17.85 7.55 17.85Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M19.25 3.9L13.85 3.9M19.25 7.5L13.85 7.5M19.25 11.1L13.85 11.1M5.3 13.582V5.25C5.3 4.00736 6.30736 3 7.55 3C8.79264 3 9.8 4.00736 9.8 5.25V13.582C10.8854 14.3085 11.6 15.5458 11.6 16.95C11.6 19.1868 9.78675 21 7.55 21C5.31325 21 3.5 19.1868 3.5 16.95C3.5 15.5458 4.21461 14.3085 5.3 13.582ZM8.45 16.95C8.45 17.4471 8.04706 17.85 7.55 17.85C7.05294 17.85 6.65 17.4471 6.65 16.95C6.65 16.4529 7.05294 16.05 7.55 16.05C8.04706 16.05 8.45 16.4529 8.45 16.95Z"
    })
  ]))
}