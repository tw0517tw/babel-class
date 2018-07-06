"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.A = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class A {
  constructor(n) {
    _defineProperty(this, "prop", void 0);

    this.prop = n;
  }

}

exports.A = A;

class B extends A {
  constructor(n) {
    super(n);

    _defineProperty(this, "prop", void 0);
  }

}

var _default = B;
exports.default = _default;