const  express=require('express');
const path = require("path");
const multer = require("multer");
const adminbookRouter=express.Router();
const Bookdata=require('../model/Bookdata');

adminbookRouter.use(express.json());
adminbookRouter.use(express.urlencoded({
  extended: true
}));

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null,  `files-${file.fieldname}-${Date.now()}.${ext}`);
    },
  });

  const upload = multer({
    storage: multerStorage,
    // fileFilter: multerFilter,
  });

function router(nav){
    adminbookRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            title: 'Library'
        })
    })
    adminbookRouter.post('/add', upload.single("image"),function(req,res){
    //     var item={
    //     title:req.query.title,
    //    author: req.query.author,
    //    genre: req.query.genre,
    //    image: req.query.image      
    //     }
    //    var book=Bookdata(item);                //GET METHOD
    //    book.save();
    //    res.redirect('/books'); 

    // });
    //Configuration for Multer

    var item={
            title:req.body.title,
           author: req.body.author,
           genre: req.body.genre,
           image:req.file.filename,
            }
           var book=Bookdata(item);               //POST METHOD
           book.save();
           res.redirect('/books'); 
    
        });
 
    


    return adminbookRouter;

}
module.exports=router;