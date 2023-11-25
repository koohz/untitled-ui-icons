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
      d: "M9.6 4.8H11.4V12H13.2C15.1882 12 16.8 13.6118 16.8 15.6C16.8 17.5882 15.1882 19.2 13.2 19.2H11.4V12H9.6C7.61178 12 6 10.3882 6 8.4C6 6.41177 7.61177 4.8 9.6 4.8Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 15.6C6 17.5882 7.61177 19.2 9.6 19.2H13.2C15.1882 19.2 16.8 17.5882 16.8 15.6C16.8 13.6118 15.1882 12 13.2 12H9.6C7.61178 12 6 10.3882 6 8.4C6 6.41177 7.61177 4.8 9.6 4.8H13.2C15.1882 4.8 16.8 6.41177 16.8 8.4M11.4 3V21"
    })
  ]))
}