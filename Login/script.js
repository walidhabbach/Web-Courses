
let Email = document.getElementsByName('Email')[0];  
let Password = document.getElementsByName('Password')[0];   


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
            
                setTimeout(() => {
                        Message.className = "alert alert-success";
                        document.querySelector(".alert-heading").innerHTML = "Your account has been successfully created";
                       
                },2);

                window.location.assign("http://localhost:82/ProjetJs/Web-Courses/Home/index.html");

            }else{
                Message.className = "alert alert-danger";
                document.querySelector(".alert-heading").innerHTML = response;
            }
         }
    }
    console.log(userData);
     xhr.setRequestHeader('Content-Type', 'application/json');
     xhr.send(JSON.stringify(userData)); 

    Message.innerHTML = "";
    Message.style.backgroundColor = "none";
    Message.style.display="none";

});

