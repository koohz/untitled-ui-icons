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
      d: "M8.30021 14.7001V9.30009H13.7002"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13.3306 20.6946C10.328 21.4964 6.9916 20.7195 4.63604 18.364C1.12132 14.8492 1.12132 9.15076 4.63604 5.63604C8.15076 2.12132 13.8492 2.12132 17.364 5.63604C19.7195 7.9916 20.4964 11.328 19.6946 14.3306M8.30021 14.7001V9.30009M8.30021 9.30009H13.7002M8.30021 9.30009L17.3 18.3"
    })
  ]))
}