const express=require("express");
const app=express();
const port=process.env.PORT || 5019;
const authorRouter=express.Router();
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/',name:'Log Out'
    }

]

const booksRouter=require('./src/routes/bookRoutes')(nav)
const authorsRouter=require('./src/routes/authorRoutes')(nav)
const adminbookRouter=require('./src/routes/adminbookRoutes')(nav)
const adminauthorRouter=require('./src/routes/adminauthorRoutes')(nav)
const loginRouter=require('./src/routes/loginRoutes')(nav)
const signupRouter=require('./src/routes/signupRoutes')(nav)


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views')

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});
//Router creation method-1

// app.get('/books',function(req,res){
//     res.render("book",
//     {
//         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
//         title:'Library'
//     });
// });
app.use('/authors',authorsRouter);
// authorRouter.get('/',function(req,res){
//     res.render("authors",
//     {
//         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
//         title:'Library'
//     });
// });

app.use('/books',booksRouter);
app.use('/addbook',adminbookRouter);
app.use('/addauthor',adminauthorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);


app.listen(port,()=>{
    console.log("Server ready at" + port);
});
