'use strict';
const svgCaptcha = require('svg-captcha');
class Captcha {
  constructor(config) {
    this.options = config.options;
  }
  generate() {
    return svgCaptcha.create(this.options);
  }
}
module.exports = Captcha;
