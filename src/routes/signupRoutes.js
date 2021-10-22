
const express=require('express');
const signupRouter=express.Router();
const Signupdata=require('../model/signupdata');
function router(nav){
    
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title:'Library'
        })
    })
    signupRouter.get('/add',function(req,res){
        
        //    res.send("User added succesfully");
        var item={
           usertype: 'user',
           name:req.query.name, 
           username: req.query.username,
           pwd: req.query.pwd
            }
            var signup=Signupdata(item);               //GET METHOD
            signup.save();
            res.redirect('/'); 
        });

    return signupRouter;
}

module.exports=router;
