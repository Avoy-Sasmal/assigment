import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to task manager ');
})

export default app;