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
      d: "M12 18.2C15.9765 18.2 19.2 14.9765 19.2 11C19.2 7.02355 15.9765 3.8 12 3.8C8.02355 3.8 4.8 7.02355 4.8 11C4.8 14.9765 8.02355 18.2 12 18.2Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M12 13.7C13.4912 13.7 14.7 12.4912 14.7 11C14.7 9.50883 13.4912 8.3 12 8.3C10.5088 8.3 9.3 9.50883 9.3 11C9.3 12.4912 10.5088 13.7 12 13.7Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M19.2 11C19.2 14.9765 15.9765 18.2 12 18.2M19.2 11C19.2 7.02355 15.9765 3.8 12 3.8M19.2 11H21M12 18.2C8.02355 18.2 4.8 14.9765 4.8 11M12 18.2V20M4.8 11C4.8 7.02355 8.02355 3.8 12 3.8M4.8 11H3M12 3.8V2M14.7 11C14.7 12.4912 13.4912 13.7 12 13.7C10.5088 13.7 9.3 12.4912 9.3 11C9.3 9.50883 10.5088 8.3 12 8.3C13.4912 8.3 14.7 9.50883 14.7 11Z"
    })
  ]))
}