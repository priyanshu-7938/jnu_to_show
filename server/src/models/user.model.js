import mongoose,{Schema} from "mongoose";

const userSchema=Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        index:true
    },
    age:{
        type:Number,
    },
    password:{
        type:String,
        required:true
    },
    disablity:{
        type:String,
        enum:["deaf","blind","none"],
        default:"none"
    },
    face_id:{
        type:String,
        required:true
    }
})
adminSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password=await bcrypt.hash(this.password,10);
    next();

}) 

adminSchema.methods.isPasswordCorrect=async function (password){
    return await bcrypt.compare(password,this.password);
}
adminSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
};



export const User=await mongoose.model("User",userSchema);