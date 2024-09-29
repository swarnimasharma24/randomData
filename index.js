const express=require("express");
const app=express();
const port=8080;

app.set("view engine","ejs");
// app.get("/",(req,res)=>{
//    res.render("home.ejs");
// });

app.get("/",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
 });
app.listen(port,()=>{
    console.log("listening ");
});
app.get("/ig/username", (req, res) => {
    
        const instadata = require("./data.json");
        console.log(instadata); // Log the Instagram data to console (for testing purposes)
        res.json(instadata); // Respond with JSON data
    
});