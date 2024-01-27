import mongoose,{Schema} from "mongoose";

const moduleSchema=Schema({
    for:{
        type:String,
        enum:["deaf","blind","none"],
        required:true
    },
    course_name:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        enum:['cultural','singing'],
        required:true,
        index:true
    },
    course_description:{
        type:String
    },
    thumbnail:{
        type:String
    },
    videos:[{
        index:{
            type:Number,
            required:true
        },
        name:{ 
            type: String,
            required : true 
        },
        description:{
            type:String
        },
        videolink:{
            type:String,
        },
        status:{
            type:String,
            enum:['pending','completed'],
            default:'pending'
        }
    }]
    
})

export const Module=await mongoose.model('Module',moduleSchema);