const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const jokes = require("./Models/Jokes")
const app = express()
const PORT =5000;


const URI = "mongodb+srv://thatguy:4f0ZWPyJn2GfPPXV@password-gen.moyya.mongodb.net/darkjokes?retryWrites=true&w=majority"
app.use(bodyParser.json())
app.use(cors())
mongoose.connect(URI,{
	useUnifiedTopology:true,
	useNewUrlParser:true
})

const connection = mongoose.connection;

connection.once("open",()=>{
	console.log("Connected to db")
})
// app.use("/",router)
app.get('/favorite', async(req,res)=>{
	try {
		
		const response = await jokes.find()
		res.json({"favorites":response})
	} catch (error) {
	res.json({"error":error})
	}
})
app.post('/favorite',async(req,res)=>{
	try {
	const response = jokes.create(req.body)	
	res.json({
		status:"ok",
		data:response,
	})
	} catch (err) {
		
	}
})
app.listen(PORT,()=>{
	console.log(`server running on port: ${PORT}`)
})