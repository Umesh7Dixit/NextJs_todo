import { getResponseMessage } from "@/helper/responseMessage";
import { jkTask } from "@/models/task";
import { NextResponse } from "next/server";






export async function GET(request,{params}){
    const { userid } = params;

    try {
        
      const tasks =  await  jkTask.find({
            userId:userid,
         })

         return NextResponse.json(tasks);

    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to get User Tasks!",404,false);
        
    }
}