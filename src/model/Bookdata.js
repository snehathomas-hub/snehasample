//Accessing mongoose package
const mongoose=require("mongoose");
//Database connection
// mongoose.connect('mongodb://localhost:27017/library');
 mongoose.connect('mongodb+srv://userone:userone@snehacluster.5dwmo.mongodb.net/LibraryApp?retryWrites=true&w=majority');
//Schema definition
const Schema=mongoose.Schema;

const BookSchema= new Schema({
    title:String,
    author:String,
    genre:String,
    image:String

});
//model creation
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;

// const SignupSchema= new Schema({                                //signup
//     usertype:String,
//     name:String,  
//     username:String,
//     pwd:String

// });
// var Signupdata=mongoose.model('signupdata',SignupSchema);
// module.exports=Signupdata;                                      //end of signup

