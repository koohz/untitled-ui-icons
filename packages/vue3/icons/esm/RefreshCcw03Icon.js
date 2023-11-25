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
      d: "M3.9 21L9.3 20.9998L9.3 15.6"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M18.3 3L12.9 3L12.9 8.4"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.9 3C12.9 3 13.6643 3.10919 16.8276 6.27244C19.9908 9.43568 19.9908 14.5643 16.8276 17.7276C15.7068 18.8483 14.3394 19.572 12.9 19.8986M12.9 3L18.3 3M12.9 3L12.9 8.4M9.3 20.9998C9.3 20.9998 8.53568 20.8906 5.37244 17.7274C2.20919 14.5641 2.20919 9.43551 5.37244 6.27226C6.49318 5.15151 7.86065 4.42785 9.3 4.10127M9.3 20.9998L3.9 21M9.3 20.9998L9.3 15.6"
    })
  ]))
}