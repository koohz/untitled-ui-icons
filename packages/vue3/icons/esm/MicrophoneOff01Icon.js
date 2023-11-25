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
      d: "M9.3 11C9.3 12.4912 10.5088 13.7 12 13.7C12.7462 13.7 13.4216 13.3973 13.9103 12.908L9.3 8.3V11Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 8.66V4.7C14.7 3.20883 13.4912 2 12 2C10.9401 2 10.0229 2.61067 9.58098 3.49934M12 17.3V20M12 17.3C8.52061 17.3 5.7 14.4794 5.7 11V9.2M12 17.3C15.4794 17.3 18.3 14.4794 18.3 11V9.2M8.4 20H15.6M3 2L21 20M12 13.7C10.5088 13.7 9.3 12.4912 9.3 11V8.3L13.9103 12.908C13.4216 13.3973 12.7462 13.7 12 13.7Z"
    })
  ]))
}