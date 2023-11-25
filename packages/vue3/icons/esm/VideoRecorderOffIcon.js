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
      d: "M21 8.23823C21 7.693 21 7.42038 20.8922 7.29414C20.7986 7.18461 20.6583 7.12648 20.5147 7.13778C20.3492 7.15081 20.1564 7.34358 19.7709 7.72912L16.5 11L19.7709 14.2709C20.1564 14.6564 20.3492 14.8492 20.5147 14.8622C20.6583 14.8735 20.7986 14.8154 20.8922 14.7059C21 14.5796 21 14.307 21 13.7618V8.23823Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5.7 4.7C4.20883 4.7 3 5.90883 3 7.4V14.6C3 16.0912 4.20883 17.3 5.7 17.3H13.8C15.0174 17.3 16.0466 16.4943 16.3835 15.387M16.5 11L19.7709 7.72912C20.1564 7.34358 20.3492 7.15081 20.5147 7.13778C20.6583 7.12648 20.7986 7.18461 20.8922 7.29414C21 7.42038 21 7.693 21 8.23823V13.7618C21 14.307 21 14.5796 20.8922 14.7059C20.7986 14.8154 20.6583 14.8735 20.5147 14.8622C20.3492 14.8492 20.1564 14.6564 19.7709 14.2709L16.5 11ZM16.5 11V9.02C16.5 7.50786 16.5 6.75179 16.2057 6.17423C15.9469 5.66619 15.5338 5.25314 15.0258 4.99428C14.4482 4.7 13.6921 4.7 12.18 4.7H9.75M3 2L21 20"
    })
  ]))
}