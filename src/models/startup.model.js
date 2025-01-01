const { default: mongoose } = require("mongoose");


const startupSchema= mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    image:{
       url:String,
       publicId:String
    },
    pitch:{
        type:String
    },
    authorId:{
        type:String
    },
    authorName:{
        type:String
    }
},{timestamps:true})

export const startups= mongoose.models.startups || mongoose.model("startups",startupSchema);
