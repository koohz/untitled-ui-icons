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
      d: "M18.4 12.45V7.32C18.4 5.80786 18.4 5.05179 18.1057 4.47423C17.8469 3.96619 17.4338 3.55314 16.9258 3.29428C16.3482 3 15.5921 3 14.08 3H8.32C6.80786 3 6.05179 3 5.47423 3.29428C4.96619 3.55314 4.55314 3.96619 4.29428 4.47423C4 5.05179 4 5.80786 4 7.32V16.68C4 18.1921 4 18.9482 4.29428 19.5258C4.55314 20.0338 4.96619 20.4469 5.47423 20.7057C6.05179 21 6.80782 21 8.31987 21H11.65M13 11.1H7.6M9.4 14.7H7.6M14.8 7.5H7.6M13.9 18.3L16.6 21M16.6 21L19.3 18.3M16.6 21V15.6"
    })
  ]))
}