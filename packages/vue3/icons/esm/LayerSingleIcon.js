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
      d: "M12.322 7.16696C12.2039 7.10793 12.1449 7.07842 12.083 7.0668C12.0281 7.05651 11.9719 7.05651 11.917 7.0668C11.8551 7.07842 11.7961 7.10793 11.678 7.16696L3 11.506L11.678 15.845C11.7961 15.904 11.8551 15.9335 11.917 15.9451C11.9719 15.9554 12.0281 15.9554 12.083 15.9451C12.1449 15.9335 12.2039 15.904 12.322 15.845L21 11.506L12.322 7.16696Z"
    })
  ]))
}