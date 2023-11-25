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
      d: "M20.9287 12.1385C20.9757 11.7656 21 11.3856 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11C3 15.9706 7.02944 20 12 20C12.3919 20 12.7779 19.975 13.1565 19.9264M12 5.6V11L15.3645 12.6823M18.3 20V14.6M15.6 17.3H21"
    })
  ]))
}