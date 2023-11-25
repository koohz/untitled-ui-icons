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
      d: "M12 20C16.9706 20 21 15.9706 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11C3 15.9706 7.02944 20 12 20Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8.85 13.4C8.85 14.5598 9.7902 15.5 10.95 15.5H12.9C14.1426 15.5 15.15 14.4926 15.15 13.25C15.15 12.0074 14.1426 11 12.9 11H11.1C9.85736 11 8.85 9.99264 8.85 8.75C8.85 7.50736 9.85736 6.5 11.1 6.5H13.05C14.2098 6.5 15.15 7.4402 15.15 8.6M12 5.15V6.5M12 15.5V16.85M21 11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11Z"
    })
  ]))
}