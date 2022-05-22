'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

const flatArray = (arrs) => {
    return ___default["default"].flattenDeep(arrs);
};
const isBaishu = (name) => {
    return name === 'baishu';
};

exports.flatArray = flatArray;
exports.isBaishu = isBaishu;
