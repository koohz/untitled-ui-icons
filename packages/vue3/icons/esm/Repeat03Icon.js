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
      d: "M12.9 20L10.2 17.3L12.9 14.6"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M11.1 2L13.8 4.7L11.1 7.4"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.9 20L10.2 17.3M10.2 17.3L12.9 14.6M10.2 17.3H14.7C18.1794 17.3 21 14.4794 21 11C21 8.48684 19.5285 6.31739 17.4 5.30627M6.6 16.6937C4.47155 15.6826 3 13.5132 3 11C3 7.52061 5.82061 4.7 9.3 4.7H13.8M13.8 4.7L11.1 2M13.8 4.7L11.1 7.4"
    })
  ]))
}