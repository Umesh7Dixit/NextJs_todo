import { jkNight } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
        
        const {userid} = await params;

        const ABS = await jkNight.findById(userid);

        return NextResponse.json(ABS)

      
}

export async function DELETE(request,{params}){
    const { userid } = params;
    try{
       const ABCDelete = await jkNight.deleteOne(
           {
               _id:userid,
           }    
       )
       
       console.log(ABCDelete);

       return NextResponse.json(
        {
            message:"data Deleted",
            success:true,
        }
       );

   }
   catch(error){
    console.log(error);
    return NextResponse.json(
        {
            message:"data can't Deleted",
        }
       );
   }


};

export async function PUT(request,{params}){
    
    const {userid} = await params;
    const{name,email,passward} = await request.json();
    
    try {
        
        const ABCuser = await jkNight.findById(userid);

        ABCuser.name = name;
        ABCuser.email = email;
        ABCuser.passward = passward;

       const updateUser = await ABCuser.save();
       console.log(updateUser);

    } catch (error) {
        console.log(error);
        console.log("can't Update data");
    }

    return NextResponse.json({
        message:"Data Update successfulley",
        success:true,
    });
}