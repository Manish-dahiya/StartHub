const { default: mongoose } = require("mongoose");

const userSchema= mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String

    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    ListedStartups:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"startups",
        default:[]
    }
})

const users= mongoose.models.users || mongoose.model("users",userSchema);

export default users