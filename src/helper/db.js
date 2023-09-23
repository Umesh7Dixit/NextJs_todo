import { jkNight } from "@/models/user";
import mongoose from "mongoose";

export const connectDb = async()=> {

   try{
       const {connection} =  await mongoose.connect(process.env.MONGO_DB_URL,{dbName:"work_manager",});
       console.log(connection.host,"db connected Shree Hare Radhe");
       const uuser = await new jkNight({
         name:"Umesh",
         email:"umesh@2003",
         password:"frheg",
       });
       await uuser.save();
   
   }catch(error){
         console.log(error);
         console.log("db not connected!");
   }
  
};