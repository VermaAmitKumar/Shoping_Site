var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const Sequelize = require('sequelize');
const {mysql}  = require('../DbConnection/DbConnection');
var multer  = require('multer')
var path = require('path')

var CategrySchema = require('../DbConnection/schema/CategrySchema')
var ProductSchema = require('../DbConnection/schema/ProductSchema')
var RegisterSchema = require('../DbConnection/schema/RegisterSchema')
var SubCategory = require('../DbConnection/schema/SubCategory')
var ProductImageSchema = require('../DbConnection/schema/ProductImageSchema')

var app = express()

var ImageDir = path.join(__dirname,'./storage');
app.use(express.static(ImageDir));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())




//store image in the folder
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, './storage')
    },
    filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
    size:{
    width: 100,
    height: 100
    }
    });    
var upload = multer({storage:storage}).array('image',10);
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
  var upload = multer({storage:storage}).array('image',10);
  app.post('/product/Save',upload, (req, res)=> {               
    res.setHeader('Content-Type', 'text/plain')    
    var id ;
    ProductSchema.create(req.body).then(data=>{
          res.send(JSON.stringify(data, undefined, 2))   
          Productid = data.Product_id;
          for(var i = 0 ; i< req.files.length;i++){
            console.log(req.files[i].filename)

            mysql.query("insert into tbl_productimages (Image_Name , Product_id,createdAt,updatedAt) values('"+ req.files[i].filename +  "','"+ Productid +"','2019-01-11 09:00:59','2019-01-11 09:00:59' )",{type:Sequelize.QueryTypes.INSERT})
            .then((getData) => {
                if (getData) {
                    console.log(JSON.stringify(getData,undefined,2))
                }
            })
        }
    })
    })  
  app.get('/product/ShowwithCatAndSubcat/:id/:id2',(req, res)=> {  
// console.log("SELECT * from  tbl_products tp ,tbl_categories tc ,tbl_sub_categories tsc , tbl_productimages PI where tp.Product_id = PI.Product_id and   tp.Category_id = tc.Category_id and       tp.Sub_Category_Id  =tsc.Sub_Category_Id and  tp.category_id = '"+ req.params.id +"' and  tp.Sub_Category_Id = '"+ req.params.id2 +"' GROUP BY tp.Product_id" );
    mysql.query("SELECT * from  tbl_products tp ,tbl_categories tc ,tbl_sub_categories tsc , tbl_productimages PI where tp.Product_id = PI.Product_id and   tp.Category_id = tc.Category_id and       tp.Sub_Category_Id  =tsc.Sub_Category_Id and  tp.category_id = '"+ req.params.id +"' and  tp.Sub_Category_Id = '"+ req.params.id2 +"' and tp.active = 1 GROUP BY tp.Product_id ",{type:Sequelize.QueryTypes.SELECT})
    .then((getData) => {
    if (getData) {
        res.send(JSON.stringify(getData,undefined,2))
    }
    }).catch((err) => {
    res.send(err);
    })
})
app.get('/adminproduct/Show',(req, res)=> {
    mysql.query("SELECT tp.Product_id,tp.Prize,tp.qty,tp.active,tc.Category_Name,tsc.Sub_Category_Name, PI.Image_Name from tbl_products tp , tbl_categories tc , tbl_sub_categories tsc , tbl_productimages PI where tp.Product_id = PI.Product_id and tp.Category_id = tc.Category_id and tp.Sub_Category_Id  =tsc.Sub_Category_Id  GROUP BY tp.Product_id ",{type:Sequelize.QueryTypes.SELECT})
    .then((getData) => {
    //  console.log(getData);
    if (getData) {
        res.send(JSON.stringify(getData,undefined,2))
    }
    }).catch((err) => {
    res.send(err);
    })

})
app.get('/product/Show',(req, res)=> {
        mysql.query("SELECT * from tbl_products tp , tbl_categories tc , tbl_sub_categories tsc , tbl_productimages PI where tp.Product_id = PI.Product_id and tp.Category_id = tc.Category_id and tp.Sub_Category_Id  =tsc.Sub_Category_Id and tp.active = 1 GROUP BY tp.Product_id ",{type:Sequelize.QueryTypes.SELECT})
        .then((getData) => {
        //  console.log(getData);
        if (getData) {
            res.send(JSON.stringify(getData,undefined,2))
        }
        }).catch((err) => {
        res.send(err);
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
app.get('/prdouct/FetchImage/:id',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
    ProductImageSchema.findAll({ where:{Product_id:req.params.id}}).then(data=>{
        res.send(JSON.stringify(data,undefined,2));
    }); 
  })
app.get('/product/FetchSingleProduct/:id',(req, res)=> {  
    // console.log("SELECT * from  tbl_products tp ,tbl_categories tc ,tbl_sub_categories tsc , tbl_productimages PI where tp.Product_id = PI.Product_id and   tp.Category_id = tc.Category_id and       tp.Sub_Category_Id  =tsc.Sub_Category_Id and  tp.category_id = '"+ req.params.id +"' and  tp.Sub_Category_Id = '"+ req.params.id2 +"' GROUP BY tp.Product_id" );
        mysql.query("select * from tbl_products tp,tbl_categories tc,tbl_sub_categories tsc,tbl_productimages PI where tp.Product_id = PI.Product_id and   tp.Category_id = tc.Category_id and  tp.Sub_Category_Id  =tsc.Sub_Category_Id and  tp.Product_id = '"+ req.params.id +"'  GROUP BY PI.Product_id ",{type:Sequelize.QueryTypes.SELECT})
        .then((getData) => {
        if (getData) {
            res.send(JSON.stringify(getData,undefined,2))
        }
        }).catch((err) => {
        res.send(err);
        })
    })
app.put('/SubCategry/ActiveDeactive/:id',(req, res)=> {
    res.setHeader('Content-Type', 'text/plain')    
        ProductSchema.update(req.body,{ where:{Product_id:req.params.id}}).then(data=>{
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