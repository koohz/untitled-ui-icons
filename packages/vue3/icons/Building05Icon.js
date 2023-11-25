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
      d: "M12.9 10.2H17.22C18.2281 10.2 18.7321 10.2 19.1172 10.3962C19.4559 10.5688 19.7312 10.8441 19.9038 11.1828C20.1 11.5679 20.1 12.0719 20.1 13.08V19.2H12.9H3.9V5.88C3.9 4.87191 3.9 4.36786 4.09619 3.98282C4.26876 3.64413 4.54413 3.36876 4.88282 3.19619C5.26786 3 5.77191 3 6.78 3H10.02C11.0281 3 11.5321 3 11.9172 3.19619C12.2559 3.36876 12.5312 3.64413 12.7038 3.98282C12.9 4.36786 12.9 4.87191 12.9 5.88V10.2Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.9 10.2H17.22C18.2281 10.2 18.7321 10.2 19.1172 10.3962C19.4559 10.5688 19.7312 10.8441 19.9038 11.1828C20.1 11.5679 20.1 12.0719 20.1 13.08V19.2M12.9 19.2V5.88C12.9 4.87191 12.9 4.36786 12.7038 3.98282C12.5312 3.64413 12.2559 3.36876 11.9172 3.19619C11.5321 3 11.0281 3 10.02 3H6.78C5.77191 3 5.26786 3 4.88282 3.19619C4.54413 3.36876 4.26876 3.64413 4.09619 3.98282C3.9 4.36786 3.9 4.87191 3.9 5.88V19.2M21 19.2H3M7.05 6.6H9.75M7.05 10.2H9.75M7.05 13.8H9.75"
    })
  ]))
}