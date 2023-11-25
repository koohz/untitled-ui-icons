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
      d: "M21 7L13.9182 14.0818C13.5618 14.4382 13.3836 14.6164 13.1781 14.6832C12.9974 14.7419 12.8026 14.7419 12.6219 14.6832C12.4164 14.6164 12.2382 14.4382 11.8818 14.0818L9.41823 11.6182C9.06182 11.2618 8.88361 11.0836 8.67812 11.0168C8.49736 10.9581 8.30264 10.9581 8.12188 11.0168C7.91639 11.0836 7.73818 11.2618 7.38177 11.6182L3 16"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M14.7 7H21V13.3"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 7L13.9182 14.0818C13.5618 14.4382 13.3836 14.6164 13.1781 14.6832C12.9974 14.7419 12.8026 14.7419 12.6219 14.6832C12.4164 14.6164 12.2382 14.4382 11.8818 14.0818L9.41823 11.6182C9.06182 11.2618 8.88361 11.0836 8.67812 11.0168C8.49736 10.9581 8.30264 10.9581 8.12188 11.0168C7.91639 11.0836 7.73818 11.2618 7.38177 11.6182L3 16M21 7H14.7M21 7V13.3"
    })
  ]))
}