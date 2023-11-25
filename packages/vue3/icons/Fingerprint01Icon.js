const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.4264 3.24708C8.76667 2.45472 10.3302 2 12 2C16.9706 2 21 6.02944 21 11C21 11.0298 20.9999 11.0596 20.9996 11.0894M4.24303 6.43327C3.45317 7.77201 3 9.33309 3 11C3 15.1936 5.86824 18.7174 9.75 19.7165M19.8369 15.4285C18.6485 17.527 16.6416 19.1009 14.25 19.7165M13.8804 5.9364C13.2948 5.71887 12.6613 5.6 12 5.6C9.01766 5.6 6.6 8.01766 6.6 11C6.6 11.6649 6.72016 12.3017 6.93995 12.8899M17.0626 9.1169C17.2808 9.70322 17.4 10.3377 17.4 11C17.4 13.9823 14.9823 16.4 12 16.4C11.3431 16.4 10.7136 16.2827 10.1314 16.0679M12 9.2V12.8"
    })
  ]))
}