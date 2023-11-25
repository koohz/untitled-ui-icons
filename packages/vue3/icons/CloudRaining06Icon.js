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
      d: "M7.5 13.7C5.01472 13.7 3 11.6853 3 9.2C3 6.71472 5.01472 4.7 7.5 4.7C7.52983 4.7 7.5596 4.70029 7.58929 4.70087C8.40846 3.09764 10.076 2 12 2C14.2673 2 16.1786 3.52438 16.7648 5.60416C16.8262 5.6014 16.8879 5.6 16.95 5.6C19.1868 5.6 21 7.41325 21 9.65C21 11.8868 19.1868 13.7 16.95 13.7C13.5691 13.7 11.3117 13.7 7.5 13.7Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.9 19.1H6.6M18.3 16.4H10.2M7.5 16.4H5.7M17.4 19.1H15.6M7.5 13.7C5.01472 13.7 3 11.6853 3 9.2C3 6.71472 5.01472 4.7 7.5 4.7C7.52983 4.7 7.5596 4.70029 7.58929 4.70087C8.40846 3.09764 10.076 2 12 2C14.2673 2 16.1786 3.52438 16.7648 5.60416C16.8262 5.6014 16.8879 5.6 16.95 5.6C19.1868 5.6 21 7.41325 21 9.65C21 11.8868 19.1868 13.7 16.95 13.7C13.5691 13.7 11.3117 13.7 7.5 13.7Z"
    })
  ]))
}