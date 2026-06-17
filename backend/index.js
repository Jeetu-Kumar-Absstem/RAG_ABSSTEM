const express=require('express');
const app=express();
const PORT=5000;
const cors = require('cors');
app.use(cors());
app.get('/api/home',(req,res)=>{
    res.send("Hello from the backend!")

}
    )
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

}
)