const express=require('express');
const loginRouter=express.Router();
function router(nav){
    
    loginRouter.get('/',function(req,res){
        res.render('home',{
            nav,
            title:'Library'
        })
        
    })

    return loginRouter;

    

}

module.exports=router;
