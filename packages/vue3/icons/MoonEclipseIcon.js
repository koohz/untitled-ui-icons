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
      d: "M14.9423 20.0929C13.7518 20.6739 12.414 21 11 21C6.02944 21 2 16.9706 2 12C2 7.02944 6.02944 3 11 3C12.414 3 13.7517 3.32606 14.9423 3.9071C14.8288 3.90238 14.7147 3.9 14.6 3.9C10.1265 3.9 6.5 7.52649 6.5 12C6.5 16.4735 10.1265 20.1 14.6 20.1C14.7147 20.1 14.8288 20.0976 14.9423 20.0929Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18.2016 6.6002C20.6 9.79055 20.5995 14.212 18.2 17.4018M11 21C12.414 21 13.7518 20.6739 14.9423 20.0929C14.8288 20.0976 14.7147 20.1 14.6 20.1C10.1265 20.1 6.5 16.4735 6.5 12C6.5 7.52649 10.1265 3.9 14.6 3.9C14.7147 3.9 14.8288 3.90238 14.9423 3.9071C13.7517 3.32606 12.414 3 11 3C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21Z"
    })
  ]))
}