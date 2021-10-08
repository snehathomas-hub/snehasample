const  express=require('express');
const adminbookRouter=express.Router();
function router(nav){
    adminbookRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            title: 'Library'
        })
    })
    adminbookRouter.get('/add',function(req,res){
        res.send("Book added succesfully");
    })

    


    return adminbookRouter;

}
module.exports=router;