
function addCourses(){

    let Query =  "SELECT * FROM courses;";
    // Send the FormData object as an AJAX request
    var xhr = new XMLHttpRequest();
    

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
        
            console.log(JSON.parse(xhr.responseText));
        }
      };
         xhr.onload = function() {
            if (xhr.readyState == 4 && xhr.status == 200) { 

                console.log(JSON.parse(xhr.responseText));
            }
           
        }

        xhr.open('GET','http://localhost:83/ProjetJs/Web-Courses/Home/GetCourses.php');   
        xhr.send();   

  
       

}