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
      d: "M8.5 3.5H14.5C16.7091 3.5 18.5 5.29086 18.5 7.5C18.5 9.70914 16.7091 11.5 14.5 11.5H8.5V3.5Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M8.5 11.5H6.5H8.5Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M13.5 15.5H6.5H13.5Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8.5 11.5H14.5C16.7091 11.5 18.5 9.70914 18.5 7.5C18.5 5.29086 16.7091 3.5 14.5 3.5H8.5V11.5ZM8.5 11.5H6.5M13.5 15.5H6.5M8.5 4V20.5"
    })
  ]))
}