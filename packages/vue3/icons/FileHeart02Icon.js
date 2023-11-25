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
      "fill-rule": "evenodd",
      d: "M15.6975 14.5475C14.9778 13.7294 13.7775 13.5094 12.8757 14.2585C11.9739 15.0076 11.8469 16.2601 12.5551 17.1461C13.2633 18.0321 15.6975 20.1 15.6975 20.1C15.6975 20.1 18.1318 18.0321 18.84 17.1461C19.5482 16.2601 19.4367 14.9998 18.5194 14.2585C17.6021 13.5173 16.4173 13.7294 15.6975 14.5475Z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18.4 10.2V7.32C18.4 5.80786 18.4 5.05179 18.1057 4.47423C17.8469 3.96619 17.4338 3.55314 16.9258 3.29428C16.3482 3 15.5921 3 14.08 3H8.32C6.80786 3 6.05179 3 5.47423 3.29428C4.96619 3.55314 4.55314 3.96619 4.29428 4.47423C4 5.05179 4 5.80786 4 7.32V16.68C4 18.1921 4 18.9482 4.29428 19.5258C4.55314 20.0338 4.96619 20.4469 5.47423 20.7057C6.05179 21 6.80786 21 8.32 21H11.2M11.65 11.1H7.6M8.5 14.7H7.6M14.8 7.5H7.6M15.6975 14.5475C14.9778 13.7294 13.7775 13.5094 12.8757 14.2585C11.9739 15.0076 11.8469 16.2601 12.5551 17.1461C13.2633 18.0321 15.6975 20.1 15.6975 20.1C15.6975 20.1 18.1318 18.0321 18.84 17.1461C19.5482 16.2601 19.4367 14.9998 18.5194 14.2585C17.6021 13.5173 16.4173 13.7294 15.6975 14.5475Z"
    })
  ]))
}