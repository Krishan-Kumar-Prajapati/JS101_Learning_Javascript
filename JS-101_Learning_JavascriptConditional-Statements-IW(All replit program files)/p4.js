var database_username="xyz@gmail.com";
var database_password="12345678";

let user="xyz@gmail.com";
let password="12345678";

if (database_username==user){
  
  if(database_password==password){
    console.log("login successful");
  }else{
    console.log("incorrect password");
  }
}
else{
  console.log("wrong credentials");
}