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
    },
    modules:[{
        module:{
            type:Schema.Types.ObjectId,
            ref:'Module'
        },
        status:{
            type:String,
            enum:['pending','completed'],
            default:'pending'
        },
        total:{
            type:Number,
            required:true
        },
        progress:{
            type:Number,
            default:1
        },
    }]
})
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password=await bcrypt.hash(this.password,10);
    next();

}); 

userSchema.methods.isPasswordCorrect=async function (password){
    return await bcrypt.compare(password,this.password);
}
userSchema.pre("save",async function(next){
    if(!this.isModified("face_id")) return next();

    this.face_id=await bcrypt.hash(this.face_id,10);
    next();

}) 

userSchema.methods.isFaceIdCorrect=async function(face_id){
    return await bcrypt.compare(face_id,this.face_id);
}
userSchema.methods.generateAccessToken=function(){
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