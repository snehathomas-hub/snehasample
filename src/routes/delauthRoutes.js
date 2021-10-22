const express=require("express");
const delauthRouter=express.Router();
const Authordata=require('../model/Authordata');
function router(nav){


    delauthRouter.get('/',function (req,res) {
    console.log("deleted");
    
})
    
    delauthRouter.get('/:id',function(req,res){
        // res.render('s',{
        //     nav,
        //     title:'Library'
        // })
        const id=req.params.id;
        Authordata.findByIdAndDelete({_id:id})
        .then(function(){
            res.redirect('/authors');
           
        })
        
    })


// delbookRouter.get('/delete',function (req,res) {
//     res.send("deleted");
    
// })



    return delauthRouter;
}

module.exports=router;
