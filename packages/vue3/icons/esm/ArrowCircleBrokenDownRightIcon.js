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
      d: "M14.7001 8.30007V13.7001H9.30012"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.6694 2.3055C12.672 1.50367 16.0084 2.28054 18.364 4.6361C21.8787 8.15082 21.8787 13.8493 18.364 17.364C14.8492 20.8787 9.15076 20.8787 5.63604 17.364C3.28048 15.0085 2.50361 11.672 3.30544 8.66946M14.7001 8.30007V13.7001M14.7001 13.7001H9.30012M14.7001 13.7001L5.69996 4.70002"
    })
  ]))
}