const express = require('express');
const app = express();

const defaultController=(req,res,next)=>{
    const {name, favoriteColor}=req.query;
    res.send(`hello ${name}, your fav color is: ${favoriteColor}`);
}

app.get('/', defaultController)

//try
const tryController = (req,res,next)=>{
    const {name, coffee}=req.query;
    res.send(`hello ${name}, welcome to the home page, would you like some ${coffee} while you wait.`);
}
app.get('/home', tryController)



const PORT = 8081;
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})