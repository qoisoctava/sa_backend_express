require('dotenv').config()
const cors = require("cors");
const PORT = process.env.PORT || 3001;
// const bodyParser = require("body-parser");
const express = require('express');

const dataRoutes = require('./routes/data.js')
const progressRoutes = require('./routes/progress.js')

const app = express(); 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use('/data', dataRoutes) 
app.use('/progress', progressRoutes) 


app.listen(PORT, ()=>{
    console.log(`Server berjalan di port ${PORT}`)
})
 