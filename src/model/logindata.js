//Accessing mongoose package
const mongoose=require("mongoose");
//Database connection
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@snehacluster.5dwmo.mongodb.net/LibraryApp?retryWrites=true&w=majority');
//Schema definition
const Schema=mongoose.Schema;

const LoginSchema= new Schema({
    
    user:String,
    pass:String
    


});
//model creation
var Logindata=mongoose.model('logindata',LoginSchema);
module.exports=Logindata;


