
const express=require('express');
const signupRouter=express.Router();
function router(nav){
    
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title:'Library'
        })
    })
    signupRouter.get('/add',function(req,res){
        
       res.send("User added succesfully");
    })

    return signupRouter;
}

module.exports=router;
