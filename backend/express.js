const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;
app.use(bodyParser.json());
const data = require('./Data/data.json')
const datamodel = require('./src/ModelSchema/CreateSchema')
const connectDb = require('./src/ConnectDB/ConnectDB')
const router = require('./src/Routers/router')
const start= async ()=>{
    try {
        await app.listen(port,()=>console.log('ported connected'))
        await connectDb().then(res=>console.log('db connected')).catch(err=>console.log(err))
  } catch (error) {
        console.log(error,"error");
    }
}
app.use('/',router)
start()
