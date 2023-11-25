import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M14.7 5.25L11.1 8.85L7.5 5.25"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M14.7 18.75L11.1 15.15L7.5 18.75"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 12H19.2M11.1 3V8.85M11.1 8.85L14.7 5.25M11.1 8.85L7.5 5.25M11.1 21V15.15M11.1 15.15L14.7 18.75M11.1 15.15L7.5 18.75"
    })
  ]))
}