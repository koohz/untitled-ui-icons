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
      d: "M11.1 9.3C12.3426 9.3 13.35 8.29264 13.35 7.05C13.35 5.80736 12.3426 4.8 11.1 4.8C9.85736 4.8 8.85 5.80736 8.85 7.05C8.85 8.29264 9.85736 9.3 11.1 9.3Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11.1 4.8C9.85736 4.8 8.85 5.80736 8.85 7.05C8.85 8.29264 9.85736 9.3 11.1 9.3C12.3426 9.3 13.35 8.29264 13.35 7.05C13.35 5.80736 12.3426 4.8 11.1 4.8ZM11.1 4.8V3M19.2 14.6437C17.2211 16.8859 14.3257 18.3 11.1 18.3C7.87433 18.3 4.97895 16.8859 3 14.6437M9.97034 8.99552L3 21M12.2297 8.99552L19.2 21"
    })
  ]))
}