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
      d: "M18.75 14.7L15.15 11.1L18.75 7.5"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M5.25 14.7L8.85 11.1L5.25 7.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 3V19.2M21 11.1H15.15M15.15 11.1L18.75 14.7M15.15 11.1L18.75 7.5M3 11.1H8.85M8.85 11.1L5.25 14.7M8.85 11.1L5.25 7.5"
    })
  ]))
}