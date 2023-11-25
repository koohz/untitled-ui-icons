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
      d: "M12 20H21H12Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      "fill-opacity": "0.01",
      d: "M3.00003 18.3255C3.00003 17.8363 3.00003 17.5917 3.05529 17.3615C3.10428 17.1574 3.18509 16.9624 3.29475 16.7834C3.41843 16.5816 3.59139 16.4086 3.93729 16.0627L16.5001 3.49998C17.3285 2.67156 18.6716 2.67156 19.5001 3.49998C20.3285 4.32841 20.3285 5.67156 19.5001 6.49998L6.93732 19.0627C6.59141 19.4086 6.41846 19.5816 6.21663 19.7053C6.03768 19.8149 5.84259 19.8957 5.63852 19.9447C5.40835 20 5.16375 20 4.67457 20H3.00003V18.3255Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 20H21M3.00003 20H4.67457C5.16376 20 5.40835 20 5.63852 19.9447C5.84259 19.8957 6.03768 19.8149 6.21663 19.7053C6.41846 19.5816 6.59141 19.4086 6.93732 19.0627L19.5001 6.49998C20.3285 5.67156 20.3285 4.32841 19.5001 3.49998C18.6716 2.67156 17.3285 2.67156 16.5001 3.49998L3.93729 16.0627C3.59139 16.4086 3.41843 16.5816 3.29475 16.7834C3.18509 16.9624 3.10428 17.1574 3.05529 17.3615C3.00003 17.5917 3.00003 17.8363 3.00003 18.3255V20Z"
    })
  ]))
}