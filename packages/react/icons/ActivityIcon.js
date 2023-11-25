const React = require("react");
function ActivityIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.01,
    d: "M21 11.1H17.4L14.7 19.2L9.3 3L6.6 11.1H3"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 11.1H17.4L14.7 19.2L9.3 3L6.6 11.1H3"
  }));
}
module.exports = ActivityIcon;