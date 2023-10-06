import mongoose from "mongoose";

export const connectDb = async()=> {

   try{
       const {connection} =  await mongoose.connect(process.env.MONGO_DB_URL,{dbName:"work_manager",});
       console.log(connection.host,"db connected Shree Hare Radhe");

   
   }catch(error){
         console.log(error);
         console.log("db not connected!");
   }
  
};