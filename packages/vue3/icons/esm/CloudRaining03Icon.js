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
      d: "M19.2 13.918C20.2854 13.1915 21 11.9542 21 10.55C21 8.44079 19.3876 6.70816 17.3282 6.51743C16.907 3.95492 14.6818 2 12 2C9.31822 2 7.09303 3.95492 6.67177 6.51743C4.61236 6.70816 3 8.44079 3 10.55C3 11.9542 3.71461 13.1915 4.8 13.918M12.225 13.7L9.70496 20M16.545 11.9L14.025 18.2M9.345 11.9L6.825 18.2"
    })
  ]))
}