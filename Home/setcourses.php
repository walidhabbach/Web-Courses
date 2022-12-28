<?php
     session_start();
   if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $userData = json_decode(file_get_contents('php://input'), true);

        $Conx = mysqli_connect("localhost","root","","webcourses_db");
         // Connect to the database mysqli_real_escape_string($dbc, trim($_POST['Email']));
  
         $category = $userData['category'];
         $PRICE = $userData['PRICE'];
         $TITLE = $userData['TITLE'];   
         $url = $userData['url'];  

        if($Conx==false){
             echo "error conx";
        }else{

            if(mysqli_query($Conx,"INSERT INTO courses (IMG_URL, TITLE, PRICE,category) VALUES ('$url', '$TITLE', '$PRICE','$category')")){
                    
                echo "added";

            }    
            $Conx->close();
        }
        // $Result = mysqli_query($Conx, "SELECT * FROM USERS WHERE EMAIL = '$Email'"); walid@3d
   }
    
 

?>
