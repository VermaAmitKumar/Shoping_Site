var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const Sequelize = require('sequelize');
const {mysql}  = require('../DbConnection/DbConnection');
var multer  = require('multer')


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
app.get('/SubCategry/Show',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
    SubCategory.findAll().then(data=>{
        res.send(JSON.stringify(data,undefined,2));
    }); 
  })
  /**********************************************product********************************************/
  var upload = multer({dest:'storage/'}).array('image',10);
  app.post('/product/Save',(req, res)=> {
        console.log(req.body.image);
    
    // res.setHeader('Content-Type', 'text/plain')    
    // ProductSchema.create(req.body).then(data=>{
    //       res.end(JSON.stringify(data, undefined, 2))   
    //   })
  }) 
 
 
  app.get('/product/ShowwithCatAndSubcat/:id/:id2',(req, res)=> {  
console.log("SELECT * FROM db_shoping.tbl_products tp,tbl_categories tc ,tbl_sub_categories tsc where tp.Category_id = tc.Category_id and tp.Sub_Category_Id=tsc.Sub_Category_Id and  tp.category_id = "+ req.params.id + " and  tp.Sub_Category_Id = " + req.params.id2);
    mysql.query("SELECT * FROM db_shoping.tbl_products tp,tbl_categories tc ,tbl_sub_categories tsc where tp.Category_id = tc.Category_id and tp.Sub_Category_Id=tsc.Sub_Category_Id and  tp.category_id = "+ req.params.id + " and  tp.Sub_Category_Id = " + req.params.id2,{type:Sequelize.QueryTypes.SELECT})
    .then((getData) => {
    if (getData) {
        res.send(JSON.stringify(getData,undefined,2))
    }
    }).catch((err) => {
    res.send(err);
    })
})
app.get('/product/Show',(req, res)=> {
        mysql.query("select * from tbl_products tp,tbl_categories tc ,tbl_sub_categories tsc where tp.Category_id = tc.Category_id and tp.Sub_Category_Id=tsc.Sub_Category_Id ",{type:Sequelize.QueryTypes.SELECT})
        .then((getData) => {
        //  console.log(getData);
        if (getData) {
            res.send(JSON.stringify(getData,undefined,2))
        }
        }).catch((err) => {
        res.send(err);
        })
    // res.setHeader('Content-Type', 'text/plain')    
    // ProductSchema.findAll().then(data=>{
    //       res.end(JSON.stringify(data, null, 2))   
    //   })
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
app.get('/SubCategry/DeletePrduct/:id',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
        ProductSchema.destroy({ where:{Product_id:req.params.id}}).then(data=>{
        res.send(JSON.stringify(data,undefined,2));
    }); 
  })
  
/**********************************************Register********************************************/
app.post('/Register/Save',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
    RegisterSchema.create(req.body).then(data=>{
          res.end(JSON.stringify(data, null, 2))   
      })
  })
app.post('/Register/Loging',(req, res)=> {
    res.setHeader('Content-Type','text/plain') 
    RegisterSchema.findOne({ where:{Email:req.body.Email } && {password:req.body.password }}).then(data=>{
          res.end(JSON.stringify(data, null, 2))   
      })
  })
  /**********************************************Register********************************************/
app.post('/Admin/Loging',(req, res)=> {
    res.setHeader('Content-Type','text/plain') 
    RegisterSchema.findOne({ where:{Email:req.body.Email } && {password:req.body.password } && {Role:req.body.Role}  }).then(data=>{
          res.end(JSON.stringify(data, null, 2))   
    })
  })
app.listen(3000);