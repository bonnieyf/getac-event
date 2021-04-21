"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

var _i18nextHttpBackend = _interopRequireDefault(require("i18next-http-backend"));

var _en = _interopRequireDefault(require("./locales/en.json"));

var _fr = _interopRequireDefault(require("./locales/fr.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resources = {
  en: {
    translation: _en["default"]
  },
  fr: {
    translation: _fr["default"]
  }
};
var supportedLanguages = ["en", "fr"];
var DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"]
};

_i18next["default"].use(_i18nextHttpBackend["default"]).use(_i18nextBrowserLanguagedetector["default"]).use(_reactI18next.initReactI18next).init({
  detection: DETECTION_OPTIONS,
  resources: resources,
  whitelist: supportedLanguages,
  fallbackLng: "en",
  supportedLngs: ["en", "fr"],
  interpolation: {
    escapeValue: false
  },
  debug: false
}, function (err, t) {
  console.info("i18next.language", _i18next["default"].language);
});

var _default = _i18next["default"];
exports["default"] = _default;