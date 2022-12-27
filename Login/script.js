var regex = /^[a-zA-Z0-9]+$/; 
var EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

 

var Username = document.getElementsByName('Username')[0];  
var Email = document.getElementsByName('Email')[0];  
var FirstPassword = document.getElementsByName('First-Password')[0];  
var SecondPassword = document.getElementsByName('Second-Password')[0];  

var Username_field = document.getElementById("Username-field");
var Email_field = document.getElementById("Email-field");
var FirstPassword_field = document.getElementById("First-Password-field");
var SecondPassword_field = document.getElementById("Second-Password-field");




document.querySelector('.Submit').addEventListener('click',(event)=>{
     
    let valid = true;  
    event.preventDefault();


    let formData = new FormData();
    formData.append('Email',Email.value);
    formData.append('Username',Username.value);
    formData.append('Password',FirstPassword.value); 
    // Send the FormData object as an AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST','SignUp.php');
    xhr.send(formData); 
    //clear fields:

    setTimeout(() => {
         let response = xhr.responseText;
         Message.innerHTML = response;
         Message.style.backgroundColor = "rgb(124, 250, 124)";
         Message.style.display="block";
    },2);
    Message.textContent = "";
    Message.style.backgroundColor = "none";
    Message.style.display="none";

});

