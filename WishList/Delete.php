<?php
     session_start();
   if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $Conx = mysqli_connect("localhost","root","","webcourses_db");

         $IdCourse = intval($_POST["IdCourse"]);

        if($Conx==false){
             echo "error conx";
        }else{  
            if(mysqli_query($Conx,"DELETE FROM  wishlist where IDCOURSE = $IdCourse ;")){
                 echo "deleted";
            }else{
                echo "Not deleted";
            }     
            $Conx->close();
        }
       
   }
    
 

?>
