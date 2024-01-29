import mongoose from "mongoose";

export function connect (){
    console.log(process.env.MONGO_URI)
    mongoose
    .connect(process.env.MONGO_URI!,{
        tls:true,

    })
    .then (()=> console.log("Database connected!"))
    .catch((err)=> console.log("Error ==>", err))
}