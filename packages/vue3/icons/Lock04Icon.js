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
      d: "M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.10102 10H7V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10H16.899M12 14V16M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z"
    })
  ]))
}