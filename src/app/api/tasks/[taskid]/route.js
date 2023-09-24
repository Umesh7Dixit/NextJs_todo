import { getResponseMessage } from "@/helper/responseMessage";
import { jkTask } from "@/models/task";
import { NextResponse } from "next/server";


export async function GET(request, { params }){
    const { taskid } = params;

    try {
        const task = await jkTask.findById(taskid);
        return NextResponse.json(task);

    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in getting perticular Task!",404,false);
    }

}



export async function PUT(request,{params}){
    try {
        const { taskid } = await params;

        const{ title, content, status} = await request.json();

        const Task = await jkTask.findById(taskid);

        Task.title = title;
        Task.content = content;
        Task.status = status;


        const abc = await Task.save();
        return NextResponse.json(abc);

    } catch (error) {
        console.log(error);
       return  getResponseMessage("Error in Updating Task!",505,false); 
    }
}


export async function DELETE(request,{params}){
    try{
       const {taskid} = params;
       await jkTask.deleteOne({
        _id: taskid,
       })

       return getResponseMessage("Task Deleted",200,true);
         
   }
   catch(error){
      console.log(error);
      return getResponseMessage("Unable to delete",404,false);
   }
}