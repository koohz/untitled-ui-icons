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
      d: "M5 9.3C5 5.82061 7.82061 3 11.3 3C14.7794 3 17.6 5.82061 17.6 9.3V14.7C17.6 18.1794 14.7794 21 11.3 21C7.82061 21 5 18.1794 5 14.7V9.3Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11.3 9.3V6.6M11.3 21C7.82061 21 5 18.1794 5 14.7V9.3C5 5.82061 7.82061 3 11.3 3C14.7794 3 17.6 5.82061 17.6 9.3V14.7C17.6 18.1794 14.7794 21 11.3 21Z"
    })
  ]))
}