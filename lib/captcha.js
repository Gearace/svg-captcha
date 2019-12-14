'use strict';
const { config, options } = require('../config/config.default');
const svgCaptcha = require('svg-captcha');
svgCaptcha.options = options;
class Captcha {
  generate() {
    return svgCaptcha.create(config);
  }
}
module.exports = Captcha;
