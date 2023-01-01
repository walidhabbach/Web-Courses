<?php
     session_start();
   if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $userData = json_decode(file_get_contents('php://input'), true);

        $Conx = mysqli_connect("localhost","root","","webcourses_db"); 
         $Username = $userData['Username'];
         $Email = $userData['Email'];   
         $Password = $userData['Password'];  

        if($Conx==false){
             echo "error conx";
        }else{

             $Query = "SELECT * FROM users WHERE email = '$Email' ";
             $result = mysqli_query($Conx, $Query);
                
            if(mysqli_num_rows($result) > 0){
                 echo "exist";
            }else{
                if(mysqli_query($Conx,"INSERT INTO users (USERNAME, EMAIL, USER_PASSWORD) VALUES ('$Username', '$Email', '$Password')")){
                     $result = mysqli_query($Conx,"SELECT * FROM users where IDUSER = (SELECT MAX(IDUSER) from users);");
                     $row = mysqli_fetch_assoc($result);
                     
                     $_SESSION['IDUSER'] = $row['IDUSER'] ;
                     $_SESSION['USERNAME'] = $row['USERNAME'] ;

                     echo "created";
                }  
            }

            $Conx->close();
        }
   }
?>
