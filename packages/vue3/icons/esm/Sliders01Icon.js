import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5.7 19.2V12.9M5.7 9.3V3M12 19.2V11.1M12 7.5V3M18.3 19.2V14.7M18.3 11.1V3M3 12.9H8.4M9.3 7.5H14.7M15.6 14.7H21"
    })
  ]))
}