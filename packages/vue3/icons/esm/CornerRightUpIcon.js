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
      d: "M11 9L16 4L21 9"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 20H6.4C9.76031 20 11.4405 20 12.7239 19.346C13.8529 18.7708 14.7708 17.8529 15.346 16.7239C16 15.4405 16 13.7603 16 10.4L16 4M16 4L11 9M16 4L21 9"
    })
  ]))
}