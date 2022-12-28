<?php
     session_start();
   if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $userData = json_decode(file_get_contents('php://input'), true);

        $Conx = mysqli_connect("localhost","root","","webcourses_db");
         // Connect to the database mysqli_real_escape_string($dbc, trim($_POST['Email']));
  
        if($Conx==false){
             //echo "error conx";
        }else{

          foreach ($userData as $user) { 

               $IMG_URL = $user['url_image'];
               $TITLE = $user['title'];
               $PRICE = $user['price'];
               $category = $user['category'];
               $img = $user['image']; 

               if(mysqli_query($Conx,"INSERT INTO courses (IMG_URL, TITLE, PRICE,category,IMG) VALUES ('$IMG_URL', '$TITLE', '$PRICE','$category','$img')")){
                    echo $TITLE;
               }
          }      
            $Conx->close();
        
        // $Result = mysqli_query($Conx, "SELECT * FROM USERS WHERE EMAIL = '$Email'"); walid@3d
     }
}

 

?>
