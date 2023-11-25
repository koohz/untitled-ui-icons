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
      d: "M21 3.9V9.3H15.6"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M3 18.3V12.9H8.4"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 12.9C3 12.9 3.10919 13.6643 6.27244 16.8276C9.43568 19.9908 14.5643 19.9908 17.7276 16.8276C18.8483 15.7068 19.572 14.3394 19.8986 12.9M3 12.9V18.3M3 12.9H8.4M21 9.3C21 9.3 20.8908 8.53568 17.7276 5.37244C14.5643 2.20919 9.43568 2.20919 6.27244 5.37244C5.15169 6.49318 4.42803 7.86065 4.10145 9.3M21 9.3V3.9M21 9.3H15.6"
    })
  ]))
}