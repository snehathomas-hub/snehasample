const express=require("express");
const booksRouter=express.Router();

function router(nav){

    var books=[
        {
            title:'Wings Of Fire',
            author:' A. P. J. Abdul Kalam',
            genre:'Autobiography',
            Language:'English',
            img:'fire.jpg'
            
        },
        {
            title:'Hamlet',
            author:'William Shakespeare',
            genre:'Drama',
            Language:'English',
            img:'hamlet.jpg'
        },
        {
            title:'Randamoozham',
            author:'M.T. Vasudevan Nair',
            genre:'Fiction',
            Language:'English',
            img:'mt.jpg'
        },
        {
            title:'Nirmala',
            author:'Premchand',
            genre:'Novel',
            Language:'Hindi',
            img:'nirmala.jpg'
        }
    ]
    
    
    //Router creation method-2
    
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Books',
            books
        });
    });
    
    //Accessing a single book
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('book',{
            nav,
            title:'Book',
            book:books[id]
    
        });
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