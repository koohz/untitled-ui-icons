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
      d: "M12.322 3.66696C12.2039 3.60793 12.1449 3.57842 12.083 3.5668C12.0281 3.55651 11.9719 3.55651 11.917 3.5668C11.8551 3.57842 11.7961 3.60793 11.678 3.66696L3 8.00597L11.678 12.345C11.7961 12.404 11.8551 12.4335 11.917 12.4451C11.9719 12.4554 12.0281 12.4554 12.083 12.4451C12.1449 12.4335 12.2039 12.404 12.322 12.345L21 8.00597L12.322 3.66696Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5.7 9.35597V14.766C5.7 15.0891 5.7 15.2506 5.74919 15.3932C5.79269 15.5193 5.86368 15.6342 5.95702 15.7295C6.06258 15.8373 6.20706 15.9095 6.49601 16.054L11.356 18.484C11.5921 18.602 11.7102 18.6611 11.834 18.6843C11.9437 18.7049 12.0563 18.7049 12.166 18.6843C12.2898 18.6611 12.4079 18.602 12.644 18.484L17.504 16.054C17.7929 15.9095 17.9374 15.8373 18.043 15.7295C18.1363 15.6342 18.2073 15.5193 18.2508 15.3932C18.3 15.2506 18.3 15.0891 18.3 14.766V9.35597M3 8.00597L11.678 3.66696C11.7961 3.60793 11.8551 3.57842 11.917 3.5668C11.9719 3.55651 12.0281 3.55651 12.083 3.5668C12.1449 3.57842 12.2039 3.60793 12.322 3.66696L21 8.00597L12.322 12.345C12.2039 12.404 12.1449 12.4335 12.083 12.4451C12.0281 12.4554 11.9719 12.4554 11.917 12.4451C11.8551 12.4335 11.7961 12.404 11.678 12.345L3 8.00597Z"
    })
  ]))
}