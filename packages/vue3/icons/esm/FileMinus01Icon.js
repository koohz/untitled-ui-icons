import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18.4 11.9471V7.32C18.4 5.80786 18.4 5.05179 18.1057 4.47423C17.8469 3.96619 17.4338 3.55314 16.9258 3.29428C16.3482 3 15.5921 3 14.08 3H8.32C6.80786 3 6.05179 3 5.47423 3.29428C4.96619 3.55314 4.55314 3.96619 4.29428 4.47423C4 5.05179 4 5.80786 4 7.32V16.68C4 18.1921 4 18.9482 4.29428 19.5258C4.55314 20.0338 4.96619 20.4469 5.47423 20.7057C6.05179 21 6.80786 21 8.32 21H13M13.9 16.5H19.3"
    })
  ]))
}