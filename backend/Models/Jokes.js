const mongoose = require('mongoose')


const Jokes = new mongoose.Schema({
	_id:{type:String},
	joke:{type:Object,default:""},
})


module.exports = mongoose.model("Jokes",Jokes)