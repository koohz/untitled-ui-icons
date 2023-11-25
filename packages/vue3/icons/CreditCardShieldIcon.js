const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M17.4 19.4C17.4 19.4 20.1 18.1131 20.1 16.1827V13.9306L18.1312 13.2271C17.6581 13.0576 17.1408 13.0576 16.6678 13.2271L14.7 13.9306V16.1827C14.7 18.1131 17.4 19.4 17.4 19.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 9.5H3M21 10.4V7.88C21 6.87191 21 6.36786 20.8038 5.98282C20.6312 5.64413 20.3559 5.36876 20.0172 5.19619C19.6321 5 19.1281 5 18.12 5H5.88C4.87191 5 4.36786 5 3.98282 5.19619C3.64413 5.36876 3.36876 5.64413 3.19619 5.98282C3 6.36786 3 6.87191 3 7.88V14.72C3 15.7281 3 16.2321 3.19619 16.6172C3.36876 16.9559 3.64413 17.2312 3.98282 17.4038C4.36786 17.6 4.87191 17.6 5.88 17.6H11.55M17.4 19.4C17.4 19.4 20.1 18.1131 20.1 16.1827V13.9306L18.1312 13.2271C17.6581 13.0576 17.1408 13.0576 16.6678 13.2271L14.7 13.9306V16.1827C14.7 18.1131 17.4 19.4 17.4 19.4Z"
    })
  ]))
}