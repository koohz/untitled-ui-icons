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
      d: "M19 5.51903C17.5176 4.25973 15.5975 3.5 13.5 3.5C8.80558 3.5 5 7.30558 5 12C5 16.6944 8.80558 20.5 13.5 20.5C15.5975 20.5 17.5176 19.7403 19 18.481M3 14H13M3 10H13"
    })
  ]))
}