

//

var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var masuk = document.forms['form']['masuk'];


function validate(){ 
         
   if (username.value == "" ) {
        alert("username tidak boleh kosong"); 
       username.focus();
       return false;
      
   }
   if (password.value == "" ) {
    alert("password tidak boleh kosong");
   password.focus();
   return false;
    }
}
