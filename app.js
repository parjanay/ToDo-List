//jshint <esversion:6></esversion:6>
const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
const items=["Buy Food","Cook Food","Eat Food"];
const workItems=[];
//Dont use var in JavaScript in programs, mostly use let to
//create files...
//JavaScript can also make const arrays to push new items to it, it is legal
//in JavaScript
app.get("/",function(req,res){
    
    const day=date.getDay();
    res.render("list", {listTitle: day,
    newListItems:items
    });
    
});
app.post("/",function(req,res){
    const item=req.body.newItem;

    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
});
app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List", newListItems:workItems});
});
app.post("/work",function(req,res){
    const item=req.body.newListItem;
    workItems.push(item);
    res.redirect("/work");

});
app.get("/about",function(req,res){
    res.render("about");
})
app.listen(3000,function(){
    console.log("Server is up at 3000 port");
})