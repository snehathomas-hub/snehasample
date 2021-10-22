//Accessing mongoose package
const mongoose=require("mongoose");
//Database connection
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@snehacluster.5dwmo.mongodb.net/LibraryApp?retryWrites=true&w=majority');
//Schema definition
const Schema=mongoose.Schema;

const AuthorSchema= new Schema({
    name:String,
    nationality:String,
    image:String

});
//model creation
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;



