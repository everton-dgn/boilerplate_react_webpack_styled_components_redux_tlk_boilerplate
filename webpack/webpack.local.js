require('dotenv').config()
const common = require('./common.js')

module.exports = common({
  mode: 'development',
  port: process.env.PORT,
  publicPath: `${process.env.PUBLIC_PATH}:${process.env.PORT}/`
})
