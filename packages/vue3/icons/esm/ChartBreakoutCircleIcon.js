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
      d: "M11 8.4H14.6V12"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.15 4.35V3M17.6954 5.30459L18.65 4.35M18.6592 8.85H20.0092M19.9556 12.9C19.504 17.448 15.6668 21 11 21C6.02944 21 2 16.9706 2 12C2 7.33319 5.55201 3.49599 10.1 3.04444M11 8.4H14.6V12M14.2577 8.4C12.1388 11.3948 8.64772 13.35 4.7 13.35C3.79739 13.35 2.91865 13.2478 2.07472 13.0543"
    })
  ]))
}