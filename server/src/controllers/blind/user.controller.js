import { Module } from '../../models/module.model.js';
import {User} from '../../models/user.model.js';
import { uploadOnCloudinary } from '../../utils/cloudinary';
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
        const createdUser=User.find(user._id).select(
            '-password -face_id'
        );
        if(createdUser){
            throw new ApiError(500,"Some error occured please try signing again");
        }
        res.status(201).json(ApiResponse(201,createdUser,"User registered succesfully"));    
    }catch(error){
        next(error);
    }

}

const Login=async(req,res,next)=>{
    try{
        const {email,password,face_id}=req.body;
        if(!(email&&password)||!face_id){
            throw new ApiError(400,"email password or face_id is required");
        }
        const user=User.findOne(email);
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
        if(!isPasswordCorrect||!isFaceIdCorrect){
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
        
        
    }catch(error) {
        next(error);
    }
}







const registerUser=asyncHandler(async(req,res)=>{
    
    const {username,fullName,email,password}=req.body;
    if(
        [fullName,email,username,password].some((field)=>field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required",);
    }
    const existedUser=await User.findOne({
        $or:[{username},{email}],
    })
    if(existedUser){
        throw new ApiError(409,"User with email or username already exists");
    }

    //from multer functionality
    const avatarLocalPath=req.files?.avatar[0]?.path;
    // const coverImageLocalPath=req.files?.coverImage[0]?.path;
    let coverImageLocalPath;
    if(req.files&&Array.isArray(req.files.coverImage)&&req.files.coverImage.length>0){
        coverImageLocalPath=req.files.coverImage[0]?.path;
    }


    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is required");
    }

    const avatar=await uploadOnCloudinary(avatarLocalPath);
    const coverImage=await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new ApiError(400,"Avatar file is required");
    }

    const user= await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url||"",
        email,
        password,
        username:username.toLowerCase()
    });

    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken"
    ); //it excludes the terms in createdUser

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user");
    }


    res.status(201).json(
        new ApiResponse(200,createdUser,"User registered succesfully")
    )
})



export {Signup,Login,updateProfile,showModules};