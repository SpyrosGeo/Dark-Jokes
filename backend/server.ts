import {model,Schema,Model, connect} from 'mongoose'
interface IJoke{
	joke:String;
	id:Number;
}
let URI="mongodb+srv://thatguy:4f0ZWPyJn2GfPPXV@password-gen.moyya.mongodb.net/darkjokes?retryWrites=true&w=majority"
const JokeSchema:Schema = new Schema({
	joke:{type:String, required:true},
	id:{type:Number, required:true}
})

const JokeModel: Model<IJoke>= model('Joke',JokeSchema)
run().catch(err=>console.log(err))
	async function run():Promise<void>{
		await connect(URI,{
			useNewUrlParser:true,
			useUnifiedTopology:true,
		})
		const joke = new JokeModel({
			joke:'Koulis sex life',
			id:1,
		})
		await joke.save()
	}
