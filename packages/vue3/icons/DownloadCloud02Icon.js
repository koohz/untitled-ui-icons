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
      d: "M8.4 15.6L12 19.2M12 19.2L15.6 15.6M12 19.2V11.1M19.2 15.3686C20.2994 14.4606 21 13.0871 21 11.55C21 8.81619 18.7838 6.6 16.05 6.6C15.8533 6.6 15.6694 6.4974 15.5695 6.32797C14.3959 4.33635 12.229 3 9.75 3C6.02208 3 3 6.02208 3 9.75C3 11.6095 3.7519 13.2934 4.96825 14.5142"
    })
  ]))
}