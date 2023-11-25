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
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.85223 2.42177C8.00789 2.26611 8.08572 2.18828 8.17654 2.13262C8.25707 2.08328 8.34486 2.04691 8.43669 2.02487C8.54027 2 8.65034 2 8.87047 2H15.1295C15.3497 2 15.4597 2 15.5633 2.02487C15.6551 2.04691 15.7429 2.08328 15.8235 2.13262C15.9143 2.18828 15.9921 2.26611 16.1478 2.42177L20.5782 6.85223C20.7339 7.00789 20.8117 7.08572 20.8674 7.17654C20.9167 7.25707 20.9531 7.34486 20.9751 7.43669C21 7.54027 21 7.65034 21 7.87047V14.1295C21 14.3497 21 14.4597 20.9751 14.5633C20.9531 14.6551 20.9167 14.7429 20.8674 14.8235C20.8117 14.9143 20.7339 14.9921 20.5782 15.1478L16.1478 19.5782C15.9921 19.7339 15.9143 19.8117 15.8235 19.8674C15.7429 19.9167 15.6551 19.9531 15.5633 19.9751C15.4597 20 15.3497 20 15.1295 20H8.87047C8.65034 20 8.54027 20 8.43669 19.9751C8.34486 19.9531 8.25707 19.9167 8.17654 19.8674C8.08572 19.8117 8.00789 19.7339 7.85223 19.5782L3.42177 15.1478C3.26611 14.9921 3.18828 14.9143 3.13262 14.8235C3.08328 14.7429 3.04691 14.6551 3.02487 14.5633C3 14.4597 3 14.3497 3 14.1295V7.87047C3 7.65034 3 7.54027 3.02487 7.43669C3.04691 7.34486 3.08328 7.25707 3.13262 7.17654C3.18828 7.08572 3.26611 7.00789 3.42177 6.85223L7.85223 2.42177Z"
    })
  ]))
}