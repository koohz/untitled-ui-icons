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
      d: "M11.25 3C7.52208 3 4.5 6.02208 4.5 9.75C4.5 12.5179 6.16603 15.0084 8.55 16.05H13.95C16.334 15.0084 18 12.5179 18 9.75C18 6.02208 14.9779 3 11.25 3Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13.95 16.05V18.3C13.95 19.1387 13.95 19.558 13.813 19.8888C13.6303 20.3299 13.2799 20.6803 12.8388 20.863C12.508 21 12.0887 21 11.25 21C10.4113 21 9.99196 21 9.66117 20.863C9.22012 20.6803 8.86971 20.3299 8.68702 19.8888C8.55 19.558 8.55 19.1387 8.55 18.3V16.05M13.95 16.05C16.334 15.0084 18 12.5179 18 9.75C18 6.02208 14.9779 3 11.25 3C7.52208 3 4.5 6.02208 4.5 9.75C4.5 12.5179 6.16603 15.0084 8.55 16.05M13.95 16.05H8.55"
    })
  ]))
}