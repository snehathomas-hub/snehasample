const express=require("express");
const authorsRouter=express.Router();

function router(nav){

    var authors=[
        {
            name:' A. P. J. Abdul Kalam',
            nationality:'Indian',
            img:'apj.jpg',
            other_works:'Ignited Minds,Mission of India'
            
        },
        {
            name:'William Shakespeare',
            nationality:'England',
            img:'shakes.jpg',
            other_works:'Macbeth,Othello,King Lear '

        },
        {
            name:'M.T. Vasudevan Nair',
            nationality:'Indian',
            img:'mtv.jpg',
            other_works:' Manju, Kaalam, Asuravithu '
        },
        {
            name:'Premchand',
            nationality:'Indian',
            img:'prem.jpg',
            other_works:'  Godaan, Karmabhoomi'
        }
    ]
    
    
    //Router creation method-2
    
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Authors',
            authors
        });
    });
    
    //Accessing a single book
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('author',{
            nav,
            title:'Author',
            author:authors[id]
    
        })
    })

    return authorsRouter;
}



module.exports=router;