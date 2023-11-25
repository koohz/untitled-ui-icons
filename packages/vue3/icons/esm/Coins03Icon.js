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
      d: "M9.3 20C12.7794 20 15.6 17.1794 15.6 13.7C15.6 10.2206 12.7794 7.4 9.3 7.4C5.82061 7.4 3 10.2206 3 13.7C3 17.1794 5.82061 20 9.3 20Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.2909 3.8C11.4272 2.68653 12.9834 2 14.7 2C18.1794 2 21 4.82061 21 8.3C21 10.0166 20.3134 11.5729 19.1999 12.7091M15.6 13.7C15.6 17.1794 12.7794 20 9.3 20C5.82061 20 3 17.1794 3 13.7C3 10.2206 5.82061 7.4 9.3 7.4C12.7794 7.4 15.6 10.2206 15.6 13.7Z"
    })
  ]))
}