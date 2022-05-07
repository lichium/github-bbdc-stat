const express = require('express');
const {bbdcRouter} = require('./Router/index')
const app = express();
app.use (bbdcRouter)
if (process.env.NODE_ENV==='production') {
    app.listen(80,'0.0.0.0',()=>{
        console.log('srart');
    });
}else {
    app.listen(8000,'localhost',()=>{
        console.log('srart');
    });
}

