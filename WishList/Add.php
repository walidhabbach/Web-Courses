<?php
     session_start();
   if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $Conx = mysqli_connect("localhost","root","","webcourses_db");

         $IdCourse = intval($_POST["IdCourse"]);
         $IdUser =$_SESSION['IDUSER'] ;

        if($Conx==false){
             echo "error conx";
        }else{  

            $Command = mysqli_query($Conx,"Select IDUSER, IDCOURSE from wishlist where IDCOURSE = '$IdCourse' and IDUSER = '$IdUser' ;");
            if(mysqli_num_rows($Command) == 0){
               if(mysqli_query($Conx,"INSERT INTO wishlist (IDCOURSE,IDUSER) VALUES ('$IdCourse', '$IdUser')")){
                    echo "inserted";
               }else{
                   echo "Not inserted";
               }  

            }else{
               echo "Already exist in your wish list";
            }

              
            $Conx->close();
        }
       
   } 

?>
