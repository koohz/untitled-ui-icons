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
      d: "M11.5 15.5002C14.8137 15.5002 17.5 12.8139 17.5 9.50023C17.5 6.18652 14.8137 3.50023 11.5 3.50023C8.18626 3.50023 5.49997 6.18652 5.49997 9.50023C5.49997 12.8139 8.18626 15.5002 11.5 15.5002Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2.66113 18.3391L7.25499 13.7452M18.2175 2.78271C21.9275 6.4927 21.9275 12.5078 18.2175 16.2177C14.5075 19.9277 8.49243 19.9277 4.78245 16.2177M17 22.0002H6.99997M12 22.0002V19.0002M17.5 9.50023C17.5 12.8139 14.8137 15.5002 11.5 15.5002C8.18626 15.5002 5.49997 12.8139 5.49997 9.50023C5.49997 6.18652 8.18626 3.50023 11.5 3.50023C14.8137 3.50023 17.5 6.18652 17.5 9.50023Z"
    })
  ]))
}