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
      d: "M6.6 17.5C4.61177 17.5 3 15.8882 3 13.9C3 12.2222 4.14779 10.8125 5.701 10.4132C5.70033 10.3755 5.7 10.3378 5.7 10.3C5.7 6.82061 8.52061 4 12 4C15.2489 4 17.9234 6.45924 18.2635 9.61775C19.8555 10.1633 21 11.673 21 13.45C21 15.6868 19.1868 17.5 16.95 17.5C13.5848 17.5 10.3689 17.5 6.6 17.5Z"
    })
  ]))
}