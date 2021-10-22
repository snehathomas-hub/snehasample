const  express=require('express');
const path = require("path");
const multer = require("multer");
const upauthRouter=express.Router();
const Authordata=require('../model/Authordata');
const ObjectId = require('mongodb').ObjectId; 

upauthRouter.use(express.json());
upauthRouter.use(express.urlencoded({
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

    upauthRouter.get('/:id',(req,res,next)=>{
        Authordata.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,docs)=>{
            if(err){
                console.log("no data");
                next(err);
            }
            else{
                res.render('updateauthor',{Authordata:docs});
            }
        })

        
    })

    //Route to update values.
    upauthRouter.post('/:id', upload.single("image"),(req,res,next)=>{
       Authordata.findByIdAndUpdate({_id: req.params.id},req.body,(err,docs)=>{
           if(err){
               console.log("error occured");
               next(err);
           }
           else{
               res.redirect('/authors');
           }
       }) 
    })
    

    return upauthRouter;

}
module.exports=router;