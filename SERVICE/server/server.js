var express = require('express')
var bodyParser = require('body-parser')
var CategrySchema = require('../DbConnection/schema/CategrySchema')
var ProductSchema = require('../DbConnection/schema/ProductSchema')
var RegisterSchema = require('../DbConnection/schema/RegisterSchema')
var SubCategory = require('../DbConnection/schema/SubCategory')

 
var app = express()
 
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

  app.get("/SubCategry/SelectBaseOnId/:id",(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
    SubCategory.findById(req.params.id).then(data=>{
        res.send(data);
    });
  })
  

  /**********************************************product********************************************/
  app.post('/SubCategry/Save',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
    ProductSchema.create(req.body).then(data=>{
          res.end(JSON.stringify(data, null, 2))   
      })
  })

/**********************************************product********************************************/
app.post('/SubCategry/Save',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
    ProductSchema.create(req.body).then(data=>{
          res.end(JSON.stringify(data, null, 2))   
      })
  })
app.listen(3000);