const mongoose = require('mongoose')
const requireDir = require('require-dir')


mongoose.connect('mongodb://127.0.0.1:27017/apihunt',{
	useNewUrlParser: true
})

requireDir('./models')


mongoose.Promisse = global.Promisse

module.exports = mongoose