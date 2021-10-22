const express=require("express");
const authorsRouter=express.Router();
const Authordata=require('../model/Authordata');

function router(nav){

    // var authors=[
    //     {
    //         name:' A. P. J. Abdul Kalam',
    //         nationality:'Indian',
    //         img:'apj.jpg',
    //         other_works:'Ignited Minds,Mission of India'
            
    //     },
    //     {
    //         name:'William Shakespeare',
    //         nationality:'England',
    //         img:'shakes.jpg',
    //         other_works:'Macbeth,Othello,King Lear '

    //     },
    //     {
    //         name:'M.T. Vasudevan Nair',
    //         nationality:'Indian',
    //         img:'mtv.jpg',
    //         other_works:' Manju, Kaalam, Asuravithu '
    //     },
    //     {
    //         name:'Premchand',
    //         nationality:'Indian',
    //         img:'prem.jpg',
    //         other_works:'  Godaan, Karmabhoomi'
    //     }
    // ]
    
    
    //Router creation method-2
    
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
    .then(function(authors){
        res.render("authors",
        {
            nav,
            title:'Authors',
            authors
        });
    })
    });

    
    
    //Accessing a single author
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Author',
                author     
            });
        })
    })

    

    return authorsRouter;
}



module.exports=router;