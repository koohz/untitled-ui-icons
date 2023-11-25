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
      d: "M6.15 4.4C6.15 3.93365 6.15 3.70047 6.23432 3.51964C6.32375 3.32788 6.47788 3.17375 6.66964 3.08432C6.85047 3 7.08365 3 7.55 3H16.45C16.9163 3 17.1495 3 17.3304 3.08432C17.5221 3.17375 17.6763 3.32788 17.7657 3.51964C17.85 3.70047 17.85 3.93365 17.85 4.4V9.75C17.85 12.9809 15.2309 15.6 12 15.6C8.76913 15.6 6.15 12.9809 6.15 9.75V4.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 15.6C8.76913 15.6 6.15 12.9809 6.15 9.75V4.4C6.15 3.93365 6.15 3.70047 6.23432 3.51964C6.32375 3.32788 6.47788 3.17375 6.66964 3.08432C6.85047 3 7.08365 3 7.55 3H16.45C16.9163 3 17.1495 3 17.3304 3.08432C17.5221 3.17375 17.6763 3.32788 17.7657 3.51964C17.85 3.70047 17.85 3.93365 17.85 4.4V9.75C17.85 12.9809 15.2309 15.6 12 15.6ZM12 15.6V19.2M16.5 19.2H7.5M21 4.8V9.3M3 4.8V9.3"
    })
  ]))
}