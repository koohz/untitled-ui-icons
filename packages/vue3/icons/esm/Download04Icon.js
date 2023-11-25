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
      d: "M8.4 11.0654L12 14.6654L15.6 11.0654"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8.4 11.0654L12 14.6654M12 14.6654L15.6 11.0654M12 14.6654V6.38545C12 5.13381 12 4.50799 11.5045 3.80731C11.1753 3.34175 10.2275 2.76716 9.6625 2.69061C8.8121 2.57539 8.48916 2.74385 7.84329 3.08077C4.965 4.58224 3 7.59437 3 11.0654C3 16.036 7.02944 20.0654 12 20.0654C16.9706 20.0654 21 16.036 21 11.0654C21 7.73418 19.1901 4.82563 16.5 3.26949"
    })
  ]))
}