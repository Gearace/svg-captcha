'use strict';

/**
 * egg-svg-captcha default config
 * @member Config#eggSvgCaptcha
 * @property {String} SOME_KEY - some description
 */
exports = {
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
