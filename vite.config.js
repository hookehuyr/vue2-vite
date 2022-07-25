/*
 * @Date: 2022-07-25 11:02:55
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2022-07-25 11:06:41
 * @FilePath: /gzs-web/vite.config.js
 * @Description: 文件描述
 */
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  plugins: [createVuePlugin()],
}
