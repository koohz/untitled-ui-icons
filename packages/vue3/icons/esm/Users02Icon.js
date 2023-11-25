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
      d: "M9.75 11.1C11.9868 11.1 13.8 9.28675 13.8 7.05C13.8 4.81325 11.9868 3 9.75 3C7.51325 3 5.7 4.81325 5.7 7.05C5.7 9.28675 7.51325 11.1 9.75 11.1Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15.6 3.42098C16.9335 4.0837 17.85 5.45983 17.85 7.05C17.85 8.64017 16.9335 10.0163 15.6 10.679M17.4 15.3897C18.7603 16.0053 19.9853 17.0085 21 18.3M3 18.3C4.75184 16.0703 7.13026 14.7 9.75 14.7C12.3697 14.7 14.7482 16.0703 16.5 18.3M13.8 7.05C13.8 9.28675 11.9868 11.1 9.75 11.1C7.51325 11.1 5.7 9.28675 5.7 7.05C5.7 4.81325 7.51325 3 9.75 3C11.9868 3 13.8 4.81325 13.8 7.05Z"
    })
  ]))
}