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
      d: "M11.576 2.26498C11.7298 2.16884 11.8067 2.12077 11.8892 2.10203C11.9621 2.08546 12.0379 2.08546 12.1108 2.10203C12.1933 2.12077 12.2702 2.16884 12.424 2.26498L20 6.99998H4L11.576 2.26498Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 21H21M6 18V9.99998M10 18V9.99998M14 18V9.99998M18 18V9.99998M20 6.99998L12.424 2.26498C12.2702 2.16884 12.1933 2.12077 12.1108 2.10203C12.0379 2.08546 11.9621 2.08546 11.8892 2.10203C11.8067 2.12077 11.7298 2.16884 11.576 2.26498L4 6.99998H20Z"
    })
  ]))
}