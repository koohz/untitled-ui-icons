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
      d: "M10.2 5.6H14.52C15.5281 5.6 16.0321 5.6 16.4172 5.79619C16.7559 5.96876 17.0312 6.24412 17.2038 6.58282C17.4 6.96786 17.4 7.4719 17.4 8.48V12.8M3 5.6H6.6M17.4 16.4V20M21 16.4L9.48 16.4C8.47191 16.4 7.96786 16.4 7.58282 16.2038C7.24413 16.0312 6.96876 15.7559 6.79619 15.4172C6.6 15.0321 6.6 14.5281 6.6 13.52V2"
    })
  ]))
}