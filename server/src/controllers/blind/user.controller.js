import { Module } from '../../models/module.model.js';
import {User} from '../../models/user.model.js';
import { ApiError } from '../../utils/ApiError.js';
import { ApiResponse } from '../../utils/ApiResponse.js';


const Signup=async(req,res,next)=>{
    try{
        const {name,email,age,password,face_id,disablity}=req.body;
        if([name,email,password,face_id].some((field)=>field?.trim()===""))
        {
            throw new ApiError(400,"All fields are required",);
        }
        const existedUser=await User.findOne({email});
        if(existedUser){
            throw new ApiError(409,"User with email already exists");
        }
        const user= await User.create({
            name,
            email,
            password,
            face_id,
            age:age||"",
            disability:disablity,
        });
        const createdUser=await User.find(user._id).select(
            '-password -face_id'
        );
        if(!createdUser){
            throw new ApiError(500,"Some error occured please try signing again");
        }
        res.status(201).json( new ApiResponse(201,createdUser,"User registered succesfully"));    
    }catch(error){
        next(error);
    }

}

const Login=async(req,res,next)=>{
    try{
        const {email,password,face_id}=req.body;
        if(!(email&&password)&&!face_id){
            throw new ApiError(400,"email password or face_id is required");
        }
        const user=await User.findOne({email});;
        if(!user){
            throw new ApiError(404,"User does not exist");
        }
        let isPasswordCorrect;
        let isFaceIdCorrect;
        if(password){
            isPasswordCorrect=await user.isPasswordCorrect(password);
        }
        else{
            isFaceIdCorrect=await user.isFaceIdCorrect(face_id);
        }
        if(!isPasswordCorrect&&!isFaceIdCorrect){
            throw new ApiError(401,"Invalid User credentials");
        }
        const loggedInUser=await User.findById(user._id).select("-password -face_id");

        const accessToken=await user.generateAccessToken();
        const options={
            httpOnly:true,
            secure:true
        }
        res.status(200).cookie('accessToken',accessToken,options).json(new ApiResponse('200',loggedInUser,'user logged in succesfully'));
        
    }catch(error){
        next(error);
    }
}

const updateProfile=async(req,res,next)=>{
    try{
        const {email,age,disability}=req.body;
        let user;
        if(email&&age&&disability){
            user=await User.findByIdandUpdate(req.user._id,{
                $set: {
                    email:email,
                    age:age,
                    disability:disability
                }
            },
            {new: true}).select('-password -face_id');
        }else if(email&&age){
            user=await User.findByIdandUpdate(req.user._id,{
                $set: {
                    email:email,
                    age:age,
                }
            },
            {new: true}).select('-password -face_id');
        }else if(age&&disability){
            user=await User.findByIdandUpdate(req.user._id,{
                $set: {
                    age:age,
                    disability:disability
                }
            },
            {new: true}).select('-password -face_id');
        }else if(email&&disability){
            user=await User.findByIdandUpdate(req.user._id,{
                $set: {
                    email:email,
                    age:age,
                }
            },
            {new: true}).select('-password -face_id');
        }else if(disability){
            user=await User.findByIdandUpdate(req.user._id,{
                $set: {
                    disability:disability
                }
            },
            {new: true}).select('-password -face_id');
        }else if(age){
            user=await User.findByIdandUpdate(req.user._id,{
                $set: {
                    age:age,
                }
            },
            {new: true}).select('-password -face_id');
        }else if(email){
            user=await User.findByIdandUpdate(req.user._id,{
                $set: {
                    email:email,
                }
            },
            {new: true}).select('-password -face_id');
        }
        res.status(200).json(new ApiResponse(200,user,"Profile update succesfully"));
        
    }catch(error){
        next(error);
    }
}

const showModules=async(req,res,next)=>{
    try{
        const  modules = await Module.find({for:'blind'});
        res.status(200).json(new ApiResponse(200,modules,"Succesfully retrieved"));
        
    }catch(error) {
        next(error);
    }
}

const showModulesbytag=async(req,res,next)=>{
    try{
        const {tags}=req.body;
        const modules=await Module.aggregate(
            {
                "$match":{"for":'blind'}
            },
            {
                "$match": {"tags":{"$in": tags}},
            }
        );
        res.status(200).json(new ApiResponse(200,modules,"Succesfully retrieved"));

    }
    catch{
        next(error);
    }
}

const updateModuleDetails=async(req,res,next)=>{
    try{
        const {index,module_id}=req.body;
        const module=await Module.findById(module_id);
        if(!module) throw new ApiError(404,"No such module exists");
        const user_id=req.user._id;
        const userModule=await User.findById({user_id},{modules:{$elemMatch:{module:module_id}}});
        const model=userModule.modules[0];
        const progress=model.progress;
        const total=model.total;
        if(progress==total){
            model.status='completed';
        }
        else{
            model.progress=progress+1;
        }
        
        await userModule.save({validateBeforeSave:false});

        res.status(200).json(new ApiResponse(200,{module_id,userModule},"updated succesfully"));

    }catch(error) {
        next(error);
    }
}
const getVideofromModule=async(req,res,next)=>{
    try{
        const {module_id,current_video}=req.body;
        const videos=await Module.findById(module_id);
        res.status(200).json(new ApiResponse(200,videos,"Videos retrieved succesfully"));


    }catch(error) {
        next(error);
    }
}





export {Signup,Login,updateProfile,showModules,showModulesbytag,updateModuleDetails,getVideofromModule};