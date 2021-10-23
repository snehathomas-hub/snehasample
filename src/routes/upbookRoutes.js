const  express=require('express');
const path = require("path");
const multer = require("multer");
const upbookRouter=express.Router();
const Bookdata=require('../model/Bookdata');
const ObjectId = require('mongodb').ObjectId; 

upbookRouter.use(express.json());
upbookRouter.use(express.urlencoded({
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
    //Route to show values.

    upbookRouter.get('/:id',(req,res,next)=>{
        Bookdata.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,docs)=>{
            if(err){
                console.log("no data");
                next(err);
            }
            else{
                res.render('updatebook',{Bookdata:docs});
            }
        })

        
    })

    //Route to update values.
    upbookRouter.post('/:id', upload.single("image"),(req,res,next)=>{
      var item={
        title:req.body.title,
           author: req.body.author,
           genre: req.body.genre,
           image:req.file.filename,
      }
       Bookdata.findByIdAndUpdate({_id: req.params.id},item,(err,docs)=>{
           if(err){
               console.log("error occured");
               next(err);
           }
           else{
               res.redirect('/books');
           }
       }) 
    })
    

    return upbookRouter;

}
module.exports=router;
