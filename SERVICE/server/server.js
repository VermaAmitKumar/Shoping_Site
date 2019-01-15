var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var CategrySchema = require('../DbConnection/schema/CategrySchema')
var ProductSchema = require('../DbConnection/schema/ProductSchema')
var RegisterSchema = require('../DbConnection/schema/RegisterSchema')
var SubCategory = require('../DbConnection/schema/SubCategory')

 
var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
 /**********************************************category********************************************/
app.post('/Categry/Save',(req, res)=> {
  res.setHeader('Content-Type', 'text/plain')    
    CategrySchema.create(req.body).then(data=>{
        res.end(JSON.stringify(data, null, 2))   
    })
})
app.get('/Categry/Show',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')
    CategrySchema.findAll().then(data=>{
          res.end(JSON.stringify(data, null, 2))   
      })
  })
/**********************************************subcategory********************************************/

app.post('/SubCategry/Save',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
    SubCategory.create(req.body).then(data=>{
          res.end(JSON.stringify(data, null, 2))   
      })
  })
  app.get('/SubCategry/SelectBaseOnId/:id',(req, res)=> {
    // var Id = req.params.id;
    res.setHeader('Content-Type', 'text/plain')    
    SubCategory.findAll({ where:{Category_id:req.params.id}}).then(data=>{
        res.send(JSON.stringify(data,undefined,2));
    }); 
  })
  /**********************************************product********************************************/
  app.post('/product/Save',(req, res)=> {
    //   console.log(req.body);
    res.setHeader('Content-Type', 'text/plain')    
    ProductSchema.create(req.body).then(data=>{
          res.end(JSON.stringify(data, undefined, 2))   
      })
  })
/**********************************************product********************************************/
app.post('/SubCategry/Save',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
    ProductSchema.create(req.body).then((data,err)=>{
          res.end(JSON.stringify(data, null, 2)) 
          if(err){
            res.end(err);
          }  
      })
  })
/**********************************************Register********************************************/
app.post('/Register/Save',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
    RegisterSchema.create(req.body).then(data=>{
          res.end(JSON.stringify(data, null, 2))   
      })
  })
app.post('/Register/Loging',(req, res)=> {
    // console.log(req.body);
    res.setHeader('Content-Type','text/plain')    
    RegisterSchema.findOne({ where:{Email:req.body.Email } && {password:req.body.password }}).then(data=>{
          res.end(JSON.stringify(data, null, 2))   
      })
  })

app.listen(3000);