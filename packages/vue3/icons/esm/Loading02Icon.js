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
      d: "M12 3V6.6M12 17.4V21M6.6 12H3M21 12H17.4M18.3706 18.3706L15.825 15.825M18.3706 5.69995L15.825 8.24553M5.62942 18.3706L8.175 15.825M5.62942 5.69995L8.175 8.24553"
    })
  ]))
}