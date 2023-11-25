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
      d: "M3 9.5H21V7.88C21 6.87191 21 6.36786 20.8038 5.98282C20.6312 5.64413 20.3559 5.36876 20.0172 5.19619C19.6321 5 19.1281 5 18.12 5H5.88C4.87191 5 4.36786 5 3.98282 5.19619C3.64413 5.36876 3.36876 5.64413 3.19619 5.98282C3 6.36786 3 6.87191 3 7.88V9.5Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M16.05 14.9L20.55 19.4M20.55 14.9L16.05 19.4M21 9.5H3M21 11.3V7.88C21 6.87191 21 6.36786 20.8038 5.98282C20.6312 5.64413 20.3559 5.36876 20.0172 5.19619C19.6321 5 19.1281 5 18.12 5H5.88C4.87191 5 4.36786 5 3.98282 5.19619C3.64413 5.36876 3.36876 5.64413 3.19619 5.98282C3 6.36786 3 6.87191 3 7.88V14.72C3 15.7281 3 16.2321 3.19619 16.6172C3.36876 16.9559 3.64413 17.2312 3.98282 17.4038C4.36786 17.6 4.87191 17.6 5.88 17.6H12"
    })
  ]))
}