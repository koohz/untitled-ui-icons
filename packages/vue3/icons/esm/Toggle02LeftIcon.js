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
      d: "M7.5 16C9.98528 16 12 13.9853 12 11.5C12 9.01472 9.98528 7 7.5 7C5.01472 7 3 9.01472 3 11.5C3 13.9853 5.01472 16 7.5 16Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.2004 15.1H17.4C19.3882 15.1 21 13.4882 21 11.5C21 9.51177 19.3882 7.9 17.4 7.9H10.2004M12 11.5C12 13.9853 9.98528 16 7.5 16C5.01472 16 3 13.9853 3 11.5C3 9.01472 5.01472 7 7.5 7C9.98528 7 12 9.01472 12 11.5Z"
    })
  ]))
}