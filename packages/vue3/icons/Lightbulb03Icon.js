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
      d: "M14 14.9937C16.1285 13.9826 17.6 11.8132 17.6 9.3C17.6 5.82061 14.7794 3 11.3 3C7.82061 3 5 5.82061 5 9.3C5 11.8132 6.47155 13.9826 8.6 14.9937V15.6C8.6 16.4387 8.6 16.858 8.73702 17.1888C8.91971 17.6299 9.27012 17.9803 9.71117 18.163C10.042 18.3 10.4613 18.3 11.3 18.3C12.1387 18.3 12.558 18.3 12.8888 18.163C13.3299 17.9803 13.6803 17.6299 13.863 17.1888C14 16.858 14 16.4387 14 15.6V14.9937Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.05 21H13.55M14 14.9937C16.1285 13.9826 17.6 11.8132 17.6 9.3C17.6 5.82061 14.7794 3 11.3 3C7.82061 3 5 5.82061 5 9.3C5 11.8132 6.47155 13.9826 8.6 14.9937V15.6C8.6 16.4387 8.6 16.858 8.73702 17.1888C8.91971 17.6299 9.27012 17.9803 9.71117 18.163C10.042 18.3 10.4613 18.3 11.3 18.3C12.1387 18.3 12.558 18.3 12.8888 18.163C13.3299 17.9803 13.6803 17.6299 13.863 17.1888C14 16.858 14 16.4387 14 15.6V14.9937Z"
    })
  ]))
}