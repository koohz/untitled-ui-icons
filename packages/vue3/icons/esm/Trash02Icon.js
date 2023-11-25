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
      d: "M3 6.6H19.2H3Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 6.6V5.88C14.7 4.87191 14.7 4.36786 14.5038 3.98282C14.3312 3.64413 14.0559 3.36876 13.7172 3.19619C13.3321 3 12.8281 3 11.82 3H10.38C9.37191 3 8.86786 3 8.48282 3.19619C8.14413 3.36876 7.86876 3.64413 7.69619 3.98282C7.5 4.36786 7.5 4.87191 7.5 5.88V6.6M3 6.6H19.2M17.4 6.6V16.68C17.4 18.1921 17.4 18.9482 17.1057 19.5258C16.8469 20.0338 16.4338 20.4469 15.9258 20.7057C15.3482 21 14.5921 21 13.08 21H9.12C7.60786 21 6.85179 21 6.27423 20.7057C5.76619 20.4469 5.35314 20.0338 5.09428 19.5258C4.8 18.9482 4.8 18.1921 4.8 16.68V6.6"
    })
  ]))
}