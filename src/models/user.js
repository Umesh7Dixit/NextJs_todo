import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name:"String",
    email:{
         type:"String",
         require:true,
    },
    password:{
        type:"String",
        require:true,
    },
});

export const jkNight = mongoose.models.Himanshu || mongoose.model("Himanshu",UserSchema);