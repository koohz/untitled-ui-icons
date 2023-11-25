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
      d: "M9.45 3.00008V7.19445C9.45 7.38991 9.45 7.48763 9.42021 7.56538C9.39211 7.63871 9.35492 7.69195 9.29572 7.74356C9.23297 7.79828 9.13133 7.83551 8.92807 7.90997C6.34403 8.85661 4.5 11.338 4.5 14.25C4.5 17.9779 7.52208 21 11.25 21C14.9779 21 18 17.9779 18 14.25C18 11.338 16.156 8.85661 13.5719 7.90997C13.3687 7.83551 13.267 7.79828 13.2043 7.74356C13.1451 7.69195 13.1079 7.63871 13.0798 7.56538C13.05 7.48763 13.05 7.38991 13.05 7.19445V3.00008M8.1 3H14.4"
    })
  ]))
}