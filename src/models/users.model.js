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
    bio: {
        type: String

    },
    ListedStartups:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"startups"
    }
})

const users= mongoose.models.users || mongoose.model("users",userSchema);

export default users