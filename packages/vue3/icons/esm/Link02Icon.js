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
      d: "M9.3 16H7.5C5.01472 16 3 13.9853 3 11.5C3 9.01472 5.01472 7 7.5 7H9.3M14.7 16H16.5C18.9853 16 21 13.9853 21 11.5C21 9.01472 18.9853 7 16.5 7H14.7M7.5 11.5L16.5 11.5"
    })
  ]))
}