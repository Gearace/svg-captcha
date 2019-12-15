'use strict';
const svgCaptcha = require('svg-captcha');
class Captcha {
  constructor(config) {
    svgCaptcha.options = config.options;
    this.config = config.config;
  }
  generate() {
    return svgCaptcha.create(this.config);
  }
}
module.exports = Captcha;
