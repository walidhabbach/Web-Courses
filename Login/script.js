
let Email = document.getElementsByName('Email')[0];  
let Password = document.getElementsByName('Password')[0];   
let Message = document.getElementById("Message"); 

document.querySelector('.Submit').addEventListener('click',(event)=>{
     
    event.preventDefault();

    let userData = {
        Email: Email.value.trim(),
        Password: Password.value
    }; 
    // Send the FormData object as an AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:82/ProjetJs/Web-Courses/Login/Login.php');
      
    //clear fields:
    xhr.onload = function() {

        if (xhr.status === 200) {
            let response = xhr.responseText;
            console.log(response);
            Message.style.display="block";

            if(response=='not exist'){
                Message.className = "alert alert-danger";
                document.querySelector(".alert-heading").innerHTML = "Your password is incorrect or this account doesn't exist.";
            } 
            else if(response=='exist'){
              
                     document.querySelector(".alert-heading").innerHTML = "Logged in successfully"; 
                     Message.className = "alert alert-success";
                     setTimeout(function() {
                        window.location.assign("http://localhost:82/ProjetJs/Web-Courses/Home/index.html");  
                      }, 2000);
                      
             
            }else{
                Message.className = "alert alert-danger";
                alertheading.innerHTML = response;
            }
      
        }
    }
    console.log(userData);
     xhr.setRequestHeader('Content-Type', 'application/json');
     xhr.send(JSON.stringify(userData)); 


});

function Clear(){
    Message.innerHTML = "";
    Message.style.backgroundColor = "none";
    Message.style.display="none";

}