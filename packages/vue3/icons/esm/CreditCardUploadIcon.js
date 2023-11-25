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
      d: "M3 8.5H21V6.88C21 5.87191 21 5.36786 20.8038 4.98282C20.6312 4.64413 20.3559 4.36876 20.0172 4.19619C19.6321 4 19.1281 4 18.12 4H5.88C4.87191 4 4.36786 4 3.98282 4.19619C3.64413 4.36876 3.36876 4.64413 3.19619 4.98282C3 5.36786 3 5.87191 3 6.88V8.5Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.3 14.8L12 12.1M12 12.1L14.7 14.8M12 12.1V18.4M21 8.5H3M6.15 16.6H5.88C4.87191 16.6 4.36786 16.6 3.98282 16.4038C3.64413 16.2312 3.36876 15.9559 3.19619 15.6172C3 15.2321 3 14.7281 3 13.72V6.88C3 5.87191 3 5.36786 3.19619 4.98282C3.36876 4.64413 3.64413 4.36876 3.98282 4.19619C4.36786 4 4.87191 4 5.88 4H18.12C19.1281 4 19.6321 4 20.0172 4.19619C20.3559 4.36876 20.6312 4.64413 20.8038 4.98282C21 5.36786 21 5.87191 21 6.88V13.72C21 14.7281 21 15.2321 20.8038 15.6172C20.6312 15.9559 20.3559 16.2312 20.0172 16.4038C19.6321 16.6 19.1281 16.6 18.12 16.6H17.85"
    })
  ]))
}