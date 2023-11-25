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
      d: "M12 8.4C9.01766 8.4 6.6 10.8177 6.6 13.8H17.4C17.4 10.8177 14.9823 8.4 12 8.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 3V4.8M5.9827 6.8827L4.70991 5.60991M18.0172 6.8827L19.29 5.60991M6.6 13.8C6.6 10.8177 9.01766 8.4 12 8.4C14.9823 8.4 17.4 10.8177 17.4 13.8M21 13.8H3M18.3 17.4H5.7"
    })
  ]))
}