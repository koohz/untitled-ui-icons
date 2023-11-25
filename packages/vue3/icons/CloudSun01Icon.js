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
      d: "M7.5 19.2C5.01472 19.2 3 17.1853 3 14.7C3 12.2147 5.01472 10.2 7.5 10.2C7.52983 10.2 7.5596 10.2003 7.58929 10.2009C8.40846 8.59764 10.076 7.5 12 7.5C14.2673 7.5 16.1786 9.02438 16.7648 11.1042C16.8262 11.1014 16.8879 11.1 16.95 11.1C19.1868 11.1 21 12.9132 21 15.15C21 17.3868 19.1868 19.2 16.95 19.2C13.5691 19.2 11.3117 19.2 7.5 19.2Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18.6312 11.4643C20.0415 10.7046 21 9.21423 21 7.5C21 5.01472 18.9853 3 16.5 3C14.0147 3 12 5.01472 12 7.5M12 7.5C10.076 7.5 8.40846 8.59764 7.58929 10.2009C7.5596 10.2003 7.52983 10.2 7.5 10.2C5.01472 10.2 3 12.2147 3 14.7C3 17.1853 5.01472 19.2 7.5 19.2C11.3117 19.2 13.5691 19.2 16.95 19.2C19.1868 19.2 21 17.3868 21 15.15C21 12.9132 19.1868 11.1 16.95 11.1C16.8879 11.1 16.8262 11.1014 16.7648 11.1042C16.1786 9.02438 14.2673 7.5 12 7.5Z"
    })
  ]))
}