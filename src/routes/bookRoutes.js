const express=require("express");
const booksRouter=express.Router();
// const Bookdata=require('../model/Bookdata');
const Bookdata=require('../model/Bookdata');

function router(nav){

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
    
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav,
                title:'Books',
                books
            });
        })
       
    });
    
    //Accessing a single book
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Book',
                book      
            });
        })
        
    });

    booksRouter.get('/addBook',function(req,res){
        const id=req.params.id;
        res.render('addBook',{
            nav,
            title:' Add Books Here',
            // book:books[id]
    
        })
    })

    return booksRouter;
}



module.exports=router;