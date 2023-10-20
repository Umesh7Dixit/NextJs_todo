import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { jkTask } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
connectDb();

export async function GET(request){
    try{
       const tasks = await jkTask.find();
       return NextResponse.json(tasks);
    }
    catch(error){
        console.log(error)
        return getResponseMessage("Error in getting task!",404,false);
    }
  
};


export async function POST(request){
    const{ title, content, userId, status} = await request.json();

    // fetchinig Loggedin user Id
    const authToken = request.cookies.get("authToken")?.value;
   
    // console.log(authToken);
 
    const data  =  jwt.verify(authToken, process.env.JWT_KEY);
    console.log(data._id);
 


    try{
        const radhe = await new jkTask({
            title,
            content,
            userId: data._id,
            status,
        })

        await radhe.save();
        console.log("user Created Shree Hare Radhe")
    }
    catch(error){
        console.log(error);
        return getResponseMessage("Error Can't fetch task!",500,false);

    }
    return NextResponse.json({message:"Task Created",success:true});
};


