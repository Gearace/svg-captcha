'use strict';
const { config, options } = require('../config/config.default');
const svgCaptcha = require('svg-captcha');
class Captcha {
  generate() {
    svgCaptcha.options = options;
    return svgCaptcha.create(config);
  }
}
module.exports = Captcha;
