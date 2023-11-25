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
      d: "M11.2 17.4C15.1764 17.4 18.4 14.1764 18.4 10.2C18.4 6.22355 15.1764 3 11.2 3C7.22355 3 4 6.22355 4 10.2C4 14.1764 7.22355 17.4 11.2 17.4Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M11.2 12.9C12.6912 12.9 13.9 11.6912 13.9 10.2C13.9 8.70883 12.6912 7.5 11.2 7.5C9.70883 7.5 8.5 8.70883 8.5 10.2C8.5 11.6912 9.70883 12.9 11.2 12.9Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11.2 17.4C15.1764 17.4 18.4 14.1764 18.4 10.2C18.4 6.22355 15.1764 3 11.2 3C7.22355 3 4 6.22355 4 10.2C4 14.1764 7.22355 17.4 11.2 17.4ZM11.2 17.4V21M11.2 21H6.7M11.2 21H15.7M13.9 10.2C13.9 11.6912 12.6912 12.9 11.2 12.9C9.70883 12.9 8.5 11.6912 8.5 10.2C8.5 8.70883 9.70883 7.5 11.2 7.5C12.6912 7.5 13.9 8.70883 13.9 10.2Z"
    })
  ]))
}