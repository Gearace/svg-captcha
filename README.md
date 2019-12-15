# egg-svg-captcha

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-svg-captcha.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-svg-captcha
[travis-image]: https://img.shields.io/travis/eggjs/egg-svg-captcha.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-svg-captcha
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-svg-captcha.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-svg-captcha?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-svg-captcha.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-svg-captcha
[snyk-image]: https://snyk.io/test/npm/egg-svg-captcha/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-svg-captcha
[download-image]: https://img.shields.io/npm/dm/egg-svg-captcha.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-svg-captcha

<!--
Description here.
-->

## Install

```bash
$ npm i egg-svg-captcha --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.eggSvgCaptcha = {
  enable: true,
  package: 'egg-svg-captcha',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.svgCaptcha = {
  config: {
    // 验证码长度
    size: 4,
    // 验证码字符中排除 0o1i
    ignoreChars: '0o1i',
    // 干扰线条的数量
    noise: 1,
    // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
    color: true,
    // 验证码图片背景颜色
    background: '#cc9966',
  },
  options: {
    width: 80,
    height: 32,
    fontSize: 32,
    // 预设随机字符串
    charPreset: '9999',
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## License

[MIT](LICENSE)
