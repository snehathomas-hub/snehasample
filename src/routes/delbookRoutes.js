const express=require("express");
const delbookRouter=express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav){


    delbookRouter.get('/',function (req,res) {
    console.log("deleted");
    
})
    
    delbookRouter.get('/:id',function(req,res){
        // res.render('s',{
        //     nav,
        //     title:'Library'
        // })
        const id=req.params.id;
        Bookdata.findByIdAndDelete({_id:id})
        .then(function(){
            res.redirect('/books');
           
        })
        
    })


// delbookRouter.get('/delete',function (req,res) {
//     res.send("deleted");
    
// })



    return delbookRouter;
}

module.exports=router;
