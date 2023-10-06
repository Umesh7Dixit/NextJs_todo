import { connectDb } from "@/helper/db";
import { jkNight } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

connectDb();




export async function GET(request){
    let sers = [];
       try {
             sers = await jkNight.find();
            
       }
       
       catch (error) {
             console.log(error);
             console.log("can't fetch data!");

       };

       return NextResponse.json(sers);
}




export async function POST(request){
    const {name , email , password} = await request.json();
      
    const ABC = await new jkNight({
        name,
        email,
        password,
       });
    
    try{

        
         ABC.password =  bcrypt.hashSync(ABC.password,parseInt(process.env.BCRYPT_SALT)
         );
       
       console.log(ABC);

       await ABC.save();
       
       console.log("Data Send Successfulley");
       
       }
       catch(error){
        console.log(error);
        console.log("can't access data");
       }

       return NextResponse.json(
        {
            message:"User Created Successfulley",
            success:true,
        }
    );
    

       
};



