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
      d: "M18.12 6.6H16.5V15.6H18.12C19.1281 15.6 19.6321 15.6 20.0172 15.4038C20.3559 15.2312 20.6312 14.9559 20.8038 14.6172C21 14.2321 21 13.7281 21 12.72V9.48C21 8.47191 21 7.96786 20.8038 7.58282C20.6312 7.24413 20.3559 6.96876 20.0172 6.79619C19.6321 6.6 19.1281 6.6 18.12 6.6Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.9 6.6H5.88C4.87191 6.6 4.36786 6.6 3.98282 6.79619C3.64413 6.96876 3.36876 7.24413 3.19619 7.58282C3 7.96786 3 8.47191 3 9.48V12.72C3 13.7281 3 14.2321 3.19619 14.6172C3.36876 14.9559 3.64413 15.2312 3.98282 15.4038C4.36786 15.6 4.87191 15.6 5.88 15.6H12.9M16.5 6.6H18.12C19.1281 6.6 19.6321 6.6 20.0172 6.79619C20.3559 6.96876 20.6312 7.24413 20.8038 7.58282C21 7.96786 21 8.47191 21 9.48V12.72C21 13.7281 21 14.2321 20.8038 14.6172C20.6312 14.9559 20.3559 15.2312 20.0172 15.4038C19.6321 15.6 19.1281 15.6 18.12 15.6H16.5M16.5 19.2L16.5 3M18.75 3.00001L14.25 3M18.75 19.2L14.25 19.2"
    })
  ]))
}