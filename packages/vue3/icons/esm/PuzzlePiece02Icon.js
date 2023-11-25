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
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2L15.24 5.24C17.4 -0.43 23.43 5.6 17.76 7.76L21 11L17.76 14.24C15.6 8.57 9.57 14.6 15.24 16.76L12 20L8.76 16.76C6.6 22.43 0.57 16.4 6.24 14.24L3 11L6.24 7.76C8.4 13.43 14.43 7.4 8.76 5.24L12 2Z"
    })
  ]))
}