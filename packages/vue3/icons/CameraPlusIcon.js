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
      d: "M12 14.6C13.9882 14.6 15.6 12.9882 15.6 11C15.6 9.01178 13.9882 7.4 12 7.4C10.0118 7.4 8.4 9.01178 8.4 11C8.4 12.9882 10.0118 14.6 12 14.6Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 10.55V13.34C21 15.3562 21 16.3643 20.6076 17.1344C20.2625 17.8118 19.7117 18.3625 19.0344 18.7076C18.2643 19.1 17.2562 19.1 15.24 19.1H8.76C6.74381 19.1 5.73572 19.1 4.96563 18.7076C4.28825 18.3625 3.73752 17.8118 3.39238 17.1344C3 16.3643 3 15.3562 3 13.34V8.66C3 6.64381 3 5.63572 3.39238 4.86563C3.73752 4.18825 4.28825 3.63752 4.96563 3.29238C5.73572 2.9 6.74381 2.9 8.76 2.9H12.45M18.3 7.4V2M15.6 4.7H21M15.6 11C15.6 12.9882 13.9882 14.6 12 14.6C10.0118 14.6 8.4 12.9882 8.4 11C8.4 9.01178 10.0118 7.4 12 7.4C13.9882 7.4 15.6 9.01178 15.6 11Z"
    })
  ]))
}