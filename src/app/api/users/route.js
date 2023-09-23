import { connectDb } from "@/helper/db";
import { jkNight } from "@/models/user";
import { NextResponse } from "next/server";

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
       try{
        const ABC = await new jkNight({
        name,
        email,
        password,
       });
       
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



