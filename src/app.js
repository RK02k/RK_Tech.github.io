const express = require("express")
const app = express();
require('./db/conn');
const User = require("./models/usermessage")
const port = process.env.port || 3000; // it simply give us the free port available 
const hbs = require("hbs");

//setting the path static passing if you taken the whole complete site then you can use it otherwise use hbs for dynamic for better
const path = require("path"); 
const staticpath = path.join(__dirname,"../public");
// const templatepath = path.join(__dirname,"../templates/views");
// const partialpath = path.join(__dirname,"../templates/partials");

const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");


//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css"))) // it simply root the whole address to css only
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js"))) 
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist"))) 
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
// now setting the hbs to keep set itself
app.set("view engine","hbs"); // inttial just before the below code
app.set("views",templatepath);
hbs.registerPartials(partialpath);

//routing 
// app.get(path,callback)
app.get('/',(req,res) =>{
    // res.send("HI You man"); // home page
    res.render("index"); // render m direct file name is required
})


app.post("/contact",async(req,res) =>{
    try{
        // res.send(req.body)
        const userData = new User(req.body)
        await userData.save()
        res.status(201).render("index")
    }catch(error){
        res.status(500).send(error);
    }
})

// server create
app.listen(port,() =>{
    console.log(`server is on port no ${port}`)
})







