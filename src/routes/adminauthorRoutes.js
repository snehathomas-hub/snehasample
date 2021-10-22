const  express=require('express');
const path = require("path");
const multer = require("multer");
const adminauthorRouter=express.Router();
const Authordata=require('../model/Authordata');

adminauthorRouter.use(express.json());
adminauthorRouter.use(express.urlencoded({
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
    adminauthorRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title: 'Library'
        })
    })
    adminauthorRouter.post('/add', upload.single("image"),function(req,res){
        //res.send("Author added succesfully");
        var item={
           name:req.body.name,
           nationality: req.body.nationality,
           image: req.file.filename
            }
           var author=Authordata(item);               
           author.save();
           res.redirect('/authors'); 
        
      

    })
   
    


    return adminauthorRouter;

}
module.exports=router;