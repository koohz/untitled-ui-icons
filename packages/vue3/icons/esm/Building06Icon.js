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
      d: "M6.78 10.2H11.1V5.88C11.1 4.87191 11.1 4.36786 11.2962 3.98282C11.4688 3.64413 11.7441 3.36876 12.0828 3.19619C12.4679 3 12.9719 3 13.98 3H17.22C18.2281 3 18.7321 3 19.1172 3.19619C19.4559 3.36876 19.7312 3.64413 19.9038 3.98282C20.1 4.36786 20.1 4.87191 20.1 5.88V19.2H11.1H3.9V13.08C3.9 12.0719 3.9 11.5679 4.09619 11.1828C4.26876 10.8441 4.54413 10.5688 4.88282 10.3962C5.26786 10.2 5.77191 10.2 6.78 10.2Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11.1 10.2H6.78C5.77191 10.2 5.26786 10.2 4.88282 10.3962C4.54413 10.5688 4.26876 10.8441 4.09619 11.1828C3.9 11.5679 3.9 12.0719 3.9 13.08V19.2M20.1 19.2V5.88C20.1 4.87191 20.1 4.36786 19.9038 3.98282C19.7312 3.64413 19.4559 3.36876 19.1172 3.19619C18.7321 3 18.2281 3 17.22 3H13.98C12.9719 3 12.4679 3 12.0828 3.19619C11.7441 3.36876 11.4688 3.64413 11.2962 3.98282C11.1 4.36786 11.1 4.87191 11.1 5.88V19.2M21 19.2H3M14.25 6.6H16.95M14.25 10.2H16.95M14.25 13.8H16.95"
    })
  ]))
}