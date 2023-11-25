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
      d: "M10.2 11.1C12.4368 11.1 14.25 9.28675 14.25 7.05C14.25 4.81325 12.4368 3 10.2 3C7.96325 3 6.15 4.81325 6.15 7.05C6.15 9.28675 7.96325 11.1 10.2 11.1Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18.3 19.2L21 16.5M21 16.5L18.3 13.8M21 16.5H15.6M12 14.25H7.95C6.69399 14.25 6.06599 14.25 5.55497 14.405C4.40441 14.754 3.50404 15.6544 3.15502 16.805C3 17.316 3 17.944 3 19.2M14.25 7.05C14.25 9.28675 12.4368 11.1 10.2 11.1C7.96325 11.1 6.15 9.28675 6.15 7.05C6.15 4.81325 7.96325 3 10.2 3C12.4368 3 14.25 4.81325 14.25 7.05Z"
    })
  ]))
}