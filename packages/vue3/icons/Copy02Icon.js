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
      d: "M8.4 11.28C8.4 10.2719 8.4 9.76786 8.59619 9.38282C8.76876 9.04413 9.04413 8.76876 9.38282 8.59619C9.76786 8.4 10.2719 8.4 11.28 8.4H18.12C19.1281 8.4 19.6321 8.4 20.0172 8.59619C20.3559 8.76876 20.6312 9.04413 20.8038 9.38282C21 9.76786 21 10.2719 21 11.28V18.12C21 19.1281 21 19.6321 20.8038 20.0172C20.6312 20.3559 20.3559 20.6312 20.0172 20.8038C19.6321 21 19.1281 21 18.12 21H11.28C10.2719 21 9.76786 21 9.38282 20.8038C9.04413 20.6312 8.76876 20.3559 8.59619 20.0172C8.4 19.6321 8.4 19.1281 8.4 18.12V11.28Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15.6 8.4V5.88C15.6 4.87191 15.6 4.36786 15.4038 3.98282C15.2312 3.64413 14.9559 3.36876 14.6172 3.19619C14.2321 3 13.7281 3 12.72 3H5.88C4.87191 3 4.36786 3 3.98282 3.19619C3.64413 3.36876 3.36876 3.64413 3.19619 3.98282C3 4.36786 3 4.87191 3 5.88V12.72C3 13.7281 3 14.2321 3.19619 14.6172C3.36876 14.9559 3.64413 15.2312 3.98282 15.4038C4.36786 15.6 4.87191 15.6 5.88 15.6H8.4M11.28 21H18.12C19.1281 21 19.6321 21 20.0172 20.8038C20.3559 20.6312 20.6312 20.3559 20.8038 20.0172C21 19.6321 21 19.1281 21 18.12V11.28C21 10.2719 21 9.76786 20.8038 9.38282C20.6312 9.04413 20.3559 8.76876 20.0172 8.59619C19.6321 8.4 19.1281 8.4 18.12 8.4H11.28C10.2719 8.4 9.76786 8.4 9.38282 8.59619C9.04413 8.76876 8.76876 9.04413 8.59619 9.38282C8.4 9.76786 8.4 10.2719 8.4 11.28V18.12C8.4 19.1281 8.4 19.6321 8.59619 20.0172C8.76876 20.3559 9.04413 20.6312 9.38282 20.8038C9.76786 21 10.2719 21 11.28 21Z"
    })
  ]))
}