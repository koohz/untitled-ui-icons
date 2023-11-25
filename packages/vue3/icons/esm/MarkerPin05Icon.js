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
      d: "M12 15.6V3V15.6Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M12 9.75L16.75 7.19233C17.1109 6.998 17.2913 6.90083 17.3547 6.76894C17.41 6.65391 17.4138 6.5208 17.3653 6.40277C17.3096 6.26744 17.135 6.16003 16.7859 5.9452L12 3"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15.6 12.337C18.7786 12.962 21 14.3892 21 16.05C21 18.2868 16.9706 20.1 12 20.1C7.02944 20.1 3 18.2868 3 16.05C3 14.3892 5.22137 12.962 8.4 12.337M12 15.6V3L16.7859 5.9452C17.135 6.16003 17.3096 6.26744 17.3653 6.40277C17.4138 6.5208 17.41 6.65391 17.3547 6.76894C17.2913 6.90083 17.1109 6.998 16.75 7.19233L12 9.75"
    })
  ]))
}