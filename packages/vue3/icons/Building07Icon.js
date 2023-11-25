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
      d: "M5.34 10.2H7.95V5.88C7.95 4.87191 7.95 4.36786 8.14619 3.98282C8.31876 3.64413 8.59413 3.36876 8.93282 3.19619C9.31786 3 9.82191 3 10.83 3H13.17C14.1781 3 14.6821 3 15.0672 3.19619C15.4059 3.36876 15.6812 3.64413 15.8538 3.98282C16.05 4.36786 16.05 4.87191 16.05 5.88V10.2H18.66C19.164 10.2 19.4161 10.2 19.6086 10.2981C19.7779 10.3844 19.9156 10.5221 20.0019 10.6914C20.1 10.8839 20.1 11.136 20.1 11.64V19.2H16.05H7.95H3.9V11.64C3.9 11.136 3.9 10.8839 3.99809 10.6914C4.08438 10.5221 4.22206 10.3844 4.39141 10.2981C4.58393 10.2 4.83595 10.2 5.34 10.2Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.95 10.2H5.34C4.83595 10.2 4.58393 10.2 4.39141 10.2981C4.22206 10.3844 4.08438 10.5221 3.99809 10.6914C3.9 10.8839 3.9 11.136 3.9 11.64V19.2M16.05 10.2H18.66C19.164 10.2 19.4161 10.2 19.6086 10.2981C19.7779 10.3844 19.9156 10.5221 20.0019 10.6914C20.1 10.8839 20.1 11.136 20.1 11.64V19.2M16.05 19.2V5.88C16.05 4.87191 16.05 4.36786 15.8538 3.98282C15.6812 3.64413 15.4059 3.36876 15.0672 3.19619C14.6821 3 14.1781 3 13.17 3H10.83C9.82191 3 9.31786 3 8.93282 3.19619C8.59413 3.36876 8.31876 3.64413 8.14619 3.98282C7.95 4.36786 7.95 4.87191 7.95 5.88V19.2M21 19.2H3M11.1 6.6H12.9M11.1 10.2H12.9M11.1 13.8H12.9"
    })
  ]))
}