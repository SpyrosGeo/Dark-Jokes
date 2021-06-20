const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()
const PORT =5000;


const URI = "mongodb+srv://thatguy:4f0ZWPyJn2GfPPXV@password-gen.moyya.mongodb.net/darkjokes?retryWrites=true&w=majority"
app.use(cors())
mongoose.connect(URI,{
	useUnifiedTopology:true,
	useNewUrlParser:true
})

// const connection = mongoose.connection;
// const jokeSchema = new mongoose.Schema({
// 	joke:String,
// 	id:String,
// })
// const Joke = mongoose.model("Joke",jokeSchema)

// connection.once("open",()=>{
// 	console.log("Connected to db")
// })
// app.use("/",router)
app.get('/',(req,res)=>{
	res.send({"hello":"fuck"})
})
app.post('/favorite',(req,res)=>{
	// console.log(res.params)
	console.log("post works correctly")
})
app.listen(PORT,()=>{
	console.log(`server running on port: ${PORT}`)
})