const serverless = require('serverless-http')
const app = require('./src/')

module.exports.lambdaHandler = serverless(app)
module.exports.googleHandler = app.callback()