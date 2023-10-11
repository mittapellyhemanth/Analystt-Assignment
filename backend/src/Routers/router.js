const express = require('express');
const router = express.Router();
const data = require('../../Data/data.json')
const datamodel = require('../ModelSchema/CreateSchema')

router.post('/postData',async (req,res)=>{
try {
    await datamodel.create(data)
    console.log(data);
} catch (error) {
    console.log("err",error);
}
});
module.exports = router;