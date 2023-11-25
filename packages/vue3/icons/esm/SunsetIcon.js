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
      d: "M15.6 4.7L12 8.3L8.4 4.7"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4.8 16.4H3M6.8827 11.2827L5.60991 10.0099M17.1172 11.2827L18.39 10.0099M21 16.4H19.2M7.5 16.4C7.5 13.9147 9.51472 11.9 12 11.9C14.4853 11.9 16.5 13.9147 16.5 16.4M21 20H3M15.6 4.7L12 8.3M12 8.3L8.4 4.7M12 8.3V2"
    })
  ]))
}