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
      d: "M3.9 3L9.3 3.00017L9.3 8.4"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M18.3 21H12.9L12.9 15.6"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.9 21C12.9 21 13.6643 20.8908 16.8276 17.7276C19.9908 14.5643 19.9908 9.43568 16.8276 6.27244C15.7068 5.15169 14.3394 4.42802 12.9 4.10144M12.9 21H18.3M12.9 21L12.9 15.6M9.3 3.00017C9.3 3.00017 8.53568 3.10937 5.37243 6.27261C2.20919 9.43586 2.20919 14.5645 5.37244 17.7277C6.49318 18.8485 7.86065 19.5722 9.3 19.8987M9.3 3.00017L3.9 3M9.3 3.00017L9.3 8.4"
    })
  ]))
}