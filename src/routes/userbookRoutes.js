const express=require("express");
const userbookRouter=express.Router();
// const Bookdata=require('../model/Bookdata');
const Bookdata=require('../model/Bookdata');

function router(usernav){

    // var books=[
    //     {
    //         title:'Wings Of Fire',
    //         author:' A. P. J. Abdul Kalam',
    //         genre:'Autobiography',
    //         Language:'English',
    //         img:'fire.jpg'
            
    //     },
    //     {
    //         title:'Hamlet',
    //         author:'William Shakespeare',
    //         genre:'Drama',
    //         Language:'English',
    //         img:'hamlet.jpg'
    //     },
    //     {
    //         title:'Randamoozham',
    //         author:'M.T. Vasudevan Nair',
    //         genre:'Fiction',
    //         Language:'English',
    //         img:'mt.jpg'
    //     },
    //     {
    //         title:'Nirmala',
    //         author:'Premchand',
    //         genre:'Novel',
    //         Language:'Hindi',
    //         img:'nirmala.jpg'
    //     }
    // ]
    
    
    //Router creation method-2
    
    
    userbookRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("userbooks",
            {
                usernav,
                title:'Books',
                books
            });
        })
       
    });
    
    //Accessing a single book
    userbookRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('userbook',{
                usernav,
                title:'Book',
                book      
            });
        })
        
    });


    return userbookRouter;
}



module.exports=router;