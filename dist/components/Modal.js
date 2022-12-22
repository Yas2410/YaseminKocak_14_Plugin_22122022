"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _closeBtn = _interopRequireDefault(require("../components/assets/close-btn.svg"));
require("../components/styles/modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Ce composant va permettre la création d'une Modale qui va
//pouvoir contenir les éléments modifiables suivants :
//Le titre, le texte ainsi que l'image
//L'état va également pouvoir être géré grâce aux éléments
//Display et SetDisplay (ouvrir et fermer la modale)
const Modal = _ref => {
  let {
    display,
    setDisplay,
    title,
    txt,
    img
  } = _ref;
  return display && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-btn-cross",
    onClick: () => setDisplay(false)
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "close-img",
    src: _closeBtn.default,
    alt: "Close Modal button"
  })), img && /*#__PURE__*/_react.default.createElement("img", {
    className: "modal-img",
    src: img,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "modal-title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-txt"
  }, txt)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-btn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-btn-close",
    onClick: () => setDisplay(false)
  }, "CLOSE"))));
};
var _default = Modal;
exports.default = _default;