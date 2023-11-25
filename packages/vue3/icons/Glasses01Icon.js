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
      d: "M9.14559 9.05441C10.5515 10.4603 10.5515 12.7397 9.14559 14.1456C7.7397 15.5515 5.46031 15.5515 4.05441 14.1456C2.64853 12.7397 2.64853 10.4603 4.05441 9.05441C5.4603 7.64853 7.73969 7.64853 9.14559 9.05441Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M19.9456 9.05441C21.3515 10.4603 21.3515 12.7397 19.9456 14.1456C18.5397 15.5515 16.2603 15.5515 14.8544 14.1456C13.4485 12.7397 13.4485 10.4603 14.8544 9.05441C16.2603 7.64853 18.5397 7.64853 19.9456 9.05441Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.2 11.1812C11.3102 10.5396 12.6897 10.5396 13.7999 11.1812M9.14559 9.05441C10.5515 10.4603 10.5515 12.7397 9.14559 14.1456C7.7397 15.5515 5.46031 15.5515 4.05441 14.1456C2.64853 12.7397 2.64853 10.4603 4.05441 9.05441C5.4603 7.64853 7.73969 7.64853 9.14559 9.05441ZM19.9456 9.05441C21.3515 10.4603 21.3515 12.7397 19.9456 14.1456C18.5397 15.5515 16.2603 15.5515 14.8544 14.1456C13.4485 12.7397 13.4485 10.4603 14.8544 9.05441C16.2603 7.64853 18.5397 7.64853 19.9456 9.05441Z"
    })
  ]))
}