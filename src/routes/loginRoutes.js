const express=require('express');
const loginRouter=express.Router();
const Logindata=require('../model/logindata');
const Signupdata = require('../model/signupdata');
const signupdata=require('../model/signupdata');
function router(nav,usernav){
    
    loginRouter.post('/',function(req,res){
      var username=req.body.username;
      var password=req.body.password;
      // console.log(username);
      // console.log(password);
      if(username=="admin" && password==12345){
        res.render('home',{
          nav,
          title:'Library'
      })
      var item={          
          user:req.body.username,
          pass:req.body.password
            }
          var login=Logindata(item);               
           login.save();
      }
      else{
        Signupdata.findOne({'username':username,'password':password},function(err,user){
          if(user){
            res.render('userhome',{
              usernav,
              title:'Library'
          });
          var item={          
            user:req.body.username,
            pass:req.body.password
              }
            var login=Logindata(item);               
             login.save();
          }
          
          else{
            console.log("user not found");
            res.redirect('/');
          }
        })
        
      }

       
//     loginRouter.get('/login',function(req,res){
//         // var item={
//         //     username:req.query.username,
//         //    pwd: req.query.pwd
//         //     }
//         //    var login=Logindata(item);               
//         //    login.save();
//         //    res.redirect('home'); 
    
//         console.log("welcome");
// });
       
    //     
     
      });
    return loginRouter;

    

}

module.exports=router;
