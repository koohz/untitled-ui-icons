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
      d: "M17.76 14.25C18.264 14.25 18.5161 14.25 18.7086 14.1519C18.8779 14.0656 19.0156 13.9279 19.1019 13.7586C19.2 13.5661 19.2 13.314 19.2 12.81V11.19C19.2 10.686 19.2 10.4339 19.1019 10.2414C19.0156 10.0721 18.8779 9.93438 18.7086 9.84809C18.5161 9.75 18.264 9.75 17.76 9.75L3 9.75L3 14.25L17.76 14.25Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M3 3L3 21L3 3Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15.6 9.75V6.69C15.6 6.18595 15.6 5.93393 15.5019 5.74141C15.4156 5.57206 15.2779 5.43438 15.1086 5.34809C14.9161 5.25 14.664 5.25 14.16 5.25H3M12 14.25V17.31C12 17.814 12 18.0661 11.9019 18.2586C11.8156 18.4279 11.6779 18.5656 11.5086 18.6519C11.3161 18.75 11.064 18.75 10.56 18.75H3M3 3L3 21M3 14.25L17.76 14.25C18.264 14.25 18.5161 14.25 18.7086 14.1519C18.8779 14.0656 19.0156 13.9279 19.1019 13.7586C19.2 13.5661 19.2 13.314 19.2 12.81V11.19C19.2 10.686 19.2 10.4339 19.1019 10.2414C19.0156 10.0721 18.8779 9.93438 18.7086 9.84809C18.5161 9.75 18.264 9.75 17.76 9.75L3 9.75L3 14.25Z"
    })
  ]))
}