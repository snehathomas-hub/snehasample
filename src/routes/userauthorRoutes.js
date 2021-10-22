const express=require("express");
const userauthorRouter=express.Router();
const Authordata=require('../model/Authordata');

function router(usernav){

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
    
    
    userauthorRouter.get('/',function(req,res){
        Authordata.find()
    .then(function(authors){
        res.render("userauthors",
        {
            usernav,
            title:'Authors',
            authors
        });
    })
    });

    
    
    //Accessing a single author
    userauthorRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('userauthor',{
                usernav,
                title:'Author',
                author     
            });
        })
    })

    

    return userauthorRouter;
}



module.exports=router;