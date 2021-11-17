const express=require('express');
const app=express();

const port=process.env.PORT || 8000

app.use(express.json())

app.get('/data',(req,res)=>{
    res.send('Hello Yash')
})

app.post('/data',(req,res)=>{
    console.log(req.body);
    res.send("data sent successfully")
})
app.listen(port,()=>{
    console.log(`Server is running at port ${8000}`)
})