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
      d: "M7.5 4.8H7.32C5.80786 4.8 5.05179 4.8 4.47423 5.09428C3.96619 5.35314 3.55314 5.76619 3.29428 6.27423C3 6.85179 3 7.60786 3 9.12V10.2H19.2V9.12C19.2 7.60786 19.2 6.85179 18.9057 6.27423C18.6469 5.76619 18.2338 5.35314 17.7258 5.09428C17.1482 4.8 16.3921 4.8 14.88 4.8H14.7H7.5Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13.8 17.4H19.2M19.2 11.55V9.12C19.2 7.60786 19.2 6.85179 18.9057 6.27423C18.6469 5.76619 18.2338 5.35314 17.7258 5.09428C17.1482 4.8 16.3921 4.8 14.88 4.8H7.32C5.80786 4.8 5.05179 4.8 4.47423 5.09428C3.96619 5.35314 3.55314 5.76619 3.29428 6.27423C3 6.85179 3 7.60786 3 9.12V16.68C3 18.1921 3 18.9482 3.29428 19.5258C3.55314 20.0338 3.96619 20.4469 4.47423 20.7057C5.05179 21 5.80786 21 7.32 21H11.55M19.2 10.2H3M14.7 3V6.6M7.5 3V6.6"
    })
  ]))
}