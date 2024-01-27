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
    tags:[{
        type:String,
        required:true,
        index:true
    }],
    course_description:{
        type:String
    },
    thumbnail:{
        type:String,
        default:'https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'
    },
    total_videos:{
        type:Number,
        required:true
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
        
    }]
    
})

export const Module=await mongoose.model('Module',moduleSchema);