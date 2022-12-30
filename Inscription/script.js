var regex = /^[a-zA-Z0-9]+$/; 
var EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

 
let Username = document.getElementsByName('Username')[0];  
let Email = document.getElementsByName('Email')[0];  
let FirstPassword = document.getElementsByName('First-Password')[0];  
let SecondPassword = document.getElementsByName('Second-Password')[0];  

let Username_field = document.getElementById("Username-field");
let Email_field = document.getElementById("Email-field");
let FirstPassword_field = document.getElementById("First-Password-field");
let SecondPassword_field = document.getElementById("Second-Password-field");

let Message=document.getElementById("Message");

var Validation = true;  


Username.addEventListener('onchange',(event)=>{

});


document.querySelector('.Submit').addEventListener('click',(event)=>{
     
   
    event.preventDefault();

    ClearValidationErrors();

    Validation = UserNameValidation();

    Validation = EmailValidation();

    Validation = PasswordValidation();

    if(Validation){
        let userData = {
            Email: Email.value.trim(),
            Username: Username.value.trim(),
            Password: FirstPassword.value
   
        }; 

        // Send the Data object as an AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open('POST','SignUp.php');
        // Set the function to run when the response is received
        xhr.onload = function() {
            if (xhr.status === 200) {
                // The request was successful. Do something with the response.
                let responce= xhr.responseText;
                
                if(responce=='exist'){
                     setTimeout(() => {
                        Message.className = "alert alert-danger";
                        document.querySelector(".alert-heading").innerHTML = "Email already exist!";
                    },2);

                    window.location.assign("http://localhost:82/ProjetJs/Web-Courses/Home/index.html");

                }else if(responce=='created'){
                     Message.className = "alert alert-success";
                     document.querySelector(".alert-heading").innerHTML = "Your account has been successfully created";
                }
                 
                Message.style.display = "block";
            } else {
                // There was an error with the request
                console.log('Error: ' + xhr.status);
            }
        };


         xhr.setRequestHeader('Content-Type', 'application/json');
         xhr.send(JSON.stringify(userData));  

    }


});
 
function UserNameValidation(){
    let valid = true;
    if(Username.value.trim() == "" || Username.value == null){
         valid = false;
         Username_field.style.display = "block"; 
         Username_field.innerHTML = "UserName field is empty";
    }
     else if(Username.value.trim().length < 3 || Username.value.trim().length > 25 ){
         valid = false;
         Username_field.style.display="block";
         Username_field.innerHTML="UserName must be between 3 and 25 characters";
     }
    return valid ;
}

function EmailValidation(){
    let valid = true;
    if(Email.value.trim().length == 0){
        valid = false;
        Email_field.style.display="block";
        Email_field.innerHTML="Email field is empty ";
    }
    else if(EmailRegex.test(Email.value.trim())==false){    
      valid = false;
      Email_field.style.display="block";
      Email_field.innerHTML="Email not valid";
    }
    return valid ;
}

function PasswordErrorVisibility(){
    return FirstPassword_field.style.display == "block";
}
function PasswordValidation(){
    
    let Valid = true;

    if(FirstPassword.value.length < 8){
        Valid = false;
        FirstPassword_field.style.display="block";
        FirstPassword_field.innerHTML="Password must be longer than 8 characters";
     
    }
    else if(FirstPassword.value.length > 16){
        Valid = false;
        FirstPassword_field.style.display="block";
        FirstPassword_field.innerHTML="Password must be less then 16 characters";
    }

    if(FirstPassword.value.match(/[1-9]/)==null){
        Valid = false;   
        if(PasswordErrorVisibility()){
            FirstPassword_field.innerHTML+="<br>";
        }else{
            FirstPassword_field.style.display="block"; 
        }
        FirstPassword_field.innerHTML+="Password must have atleast one Number";
     
    }

    if(FirstPassword.value.match(/[!\@\#\$\%\^\&\*]/)==null){
        Valid = false;
       
        if(PasswordErrorVisibility()){
            FirstPassword_field.innerHTML+="<br>";
        }else{
            FirstPassword_field.style.display="block"; 
        }
        FirstPassword_field.innerHTML+="Password must have atleast one special characters";
        
    }
    if(FirstPassword.value != SecondPassword.value){
        Valid = false;
        SecondPassword_field.style.display = "block";
        SecondPassword_field.innerHTML = "Make sure your passwords match";
    }
    
    return Valid;
}

function ClearValidationErrors(){
     Username_field.innerHTML="";
     Email_field.innerHTML='';
     FirstPassword_field.innerHTML='';
     SecondPassword_field.innerHTML='';

     Username_field.style.display='none';
     Email_field.style.display='none';
     FirstPassword_field.style.display='none';
     SecondPassword_field.style.display='none';

     document.querySelector(".alert-heading").innerHTML = '';
     Message.style.display = "none";
}

