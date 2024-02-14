// import express from "express";
const express=require("express");
const fs=require("fs");
const path=require("path");
const dirPath =path.join(__dirname,"/timestamps");
console.log("dirPath",dirPath)

const app=express()

app.use(express.static("timestamps"))

app.get("/",(req,res)=>{
    res.send("hey there iam working fine not working")
})

app.get("/static",(req,res)=>{

let time=new Date();
let timenow=time.toUTCString().slice(0,-3);
let content=`current time is${timenow}`
console.log(dirPath)
fs.writeFileSync(path.join(dirPath,"/date-time.txt"),content
// (err)=>{
//    if(err){
//     console.log("error")
//    }
//    else{
//     console.log("file created successfully")
   
//    }
// }
)
res.sendFile(path.join(__dirname,"timestamps/date-time.txt"))    
}
)
app.listen(5000,()=>console.log('server started in localhost:5000'))