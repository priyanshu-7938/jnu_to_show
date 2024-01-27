import mongoose from "mongoose";

const connectDB=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/JNU_HACKATHON`);
        console.log(`\nMONGODB connected !! DB NAME: ${connectionInstance.connection}`);
    } 
    catch (error) {
        console.log("MONGODB error occured: ",error);
        process.exit(1);
    }
}

export default connectDB;