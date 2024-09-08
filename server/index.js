/** FEEDBACK: Great job! In your package.json file, the start command should be using node.  */
// used express to make app
const express = require('express');
const app = express();

//1st controller
const defaultController=(req,res,next)=>{
    const {name, favoriteColor}=req.query;
    res.send(`
    <h1>Hello ${name}!</h1>
    <p>Your favorite color is: ${favoriteColor}</p>
    `);
}

// 1st get
app.get('/', defaultController)

//try
// 2nd controller
const tryController = (req,res,next)=>{
    const {name, coffee}=req.query;
    res.send(`
    <h1>Hello ${name}!</h1>
    <p>Welcome to the home page. Would you like some ${coffee} while you wait?</p>
    `);
}

//2nd get
app.get('/home', tryController)

//3rd controller
const serveData = (req, res, next) => {
    const data = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];
    res.send(data);
}

//3rd get
app.get('/api/data', serveData)

//4th controller
const serveHello = (req, res, next) => {
    res.send('hello');
}

//4th get
app.get('/api/hello', serveHello);

//available port
const PORT = 8081;
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})