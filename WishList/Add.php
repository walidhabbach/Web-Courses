<?php
     session_start();
   if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $Conx = mysqli_connect("localhost","root","","webcourses_db");

         $IdCourse = intval($_POST["IdCourse"]);

        if($Conx==false){
             echo "error conx";
        }else{ 
            $IdUser =$_SESSION['IDUSER'] ;
            if(mysqli_query($Conx,"INSERT INTO wishlist (IDCOURSE,IDUSER) VALUES ('$IdCourse', '$IdUser')")){
                 echo "inserted";
            }else{
                echo "Not inserted";
            }     
            $Conx->close();
        }
        // $Result = mysqli_query($Conx, "SELECT * FROM USERS WHERE EMAIL = '$Email'"); walid@3d
   }
    
 

?>
