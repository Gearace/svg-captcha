'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this.app.captcha.generate().text);

    this.ctx.body = 'hi, ' + this.app.plugins.eggSvgCaptcha.name;
  }
}

module.exports = HomeController;
