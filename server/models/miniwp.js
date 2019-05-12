const mongoose = require('mongoose')
const {Schema} = mongoose
const miniwpSchema = new Schema({
    title: {type: String, 
            required: [true, 'title is required']},
    author: String,        
    content : {type :String,
               required : [true, 'description is requires']},
    image: String,
    createdAt: Date,
    user_Id : {type: Schema.Types.ObjectId, ref: 'User'}
})

const Miniwp = mongoose.model('Miniwp', miniwpSchema)
module.exports = Miniwp