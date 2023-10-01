const express = require('express')
const app = express();
const port = 4000;

const time = (req,res, next)=>{
    // const d =new Date();
    // if((d.getDay()>=1 &&d.getDay()<=5 &&d.getHours()>=9 && d.getHours()<17)){
    //     next();
    // }
    // else{
    //     app.status(407).send('msakrin');

    // }
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = now.getHours();

    if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
        next(); // Continue to the next middleware/route
    } else {
        res.status(403).send('MSAKRIN');
    }
   

}

const pug = require('pug');
app.set('view engine', 'pug');



app.use(time)
app.get('/home',(req,res)=>{
    res.render("index", { title:"hello",message:"hello from home"})
})
app.get('/OurServices',(req,res)=>{
    res.render("index", { title:"hello",message:"hello from OurServices "})
})
app.get('/ContactUs',(req,res)=>{
    res.render("index", { title:"hello",message:"hello from ContactUs"})})






app.listen(port,()=>{
    console.log('the server is running 😉')
})