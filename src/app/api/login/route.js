import { NextResponse } from "next/server";
import { jkNight } from "@/models/user"; 
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

connectDb()

export async function POST(request){

    // console.log("Login api")

    const {email, password} = await request.json();

    try {
        
        //1.  get user
        const user = await jkNight.findOne({email:email,});

        console.log(user)

        if(user == null)
        {
            throw new Error("User not found");
        }
          
        // 2.   password check
        // check/compare old password with new password coming from request

       const matched =  bcrypt.compareSync(password,user.password);

       if(!matched){
        throw new Error("Password not matched !!");
       }


    //    3. Generate token

        
    const token = jwt.sign(    { _id: user._id,   name:user.name,    }   , process.env.JWT_KEY  );

    // 4.  Nextresponse --cookie

 
        const response = NextResponse.json({
            message:"Login Successs",
            success:true,
            user:user,
        });

        response.cookies.set("authToken",token,{expiresIn:"1d",httpOnly:true});

        return response;

console.log(user);
console.log(token);

       
             

    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
                success:false,
            },{status:500,}
        )
    }

    return NextResponse.json({
        message:"success",
    })

}