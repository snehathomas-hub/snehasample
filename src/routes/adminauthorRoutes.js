const  express=require('express');
const adminauthorRouter=express.Router();



function router(nav){
    adminauthorRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title: 'Library'
        })
    })
    adminauthorRouter.get('/add',function(req,res){
        res.send("Book added succesfully");
      
        // res.render('home',{
        //     nav,
        //     title: 'Library'
        
            
           
        // })
    })
   
    


    return adminauthorRouter;

}
module.exports=router;