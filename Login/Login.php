<?php
     session_start();
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){

        $userData = json_decode(file_get_contents('php://input'), true);
        $Conx = mysqli_connect("localhost","root","","webcourses_db");
        // Connect to the database mysqli_real_escape_string($dbc, trim($_POST['Email']));


        $Email = $userData['Email'];   
        $Password = $userData['Password']; 
        if($Conx==false){
            echo "error conx";
        }else{
            $Command = mysqli_query($Conx,"Select IDUSER from users where EMAIL='$Email' and USER_PASSWORD='$Password';");
            if($Command){
                 $result = mysqli_query($Conx,"SELECT * FROM users where IDUSER = (SELECT MAX(IDUSER) from users);");
                 $row = mysqli_fetch_assoc($result);
                 $_SESSION['IDUSER'] = $row['IDUSER'] ;
                 $_SESSION['USERNAME'] = $row['USERNAME'] ; 
                 
                echo "exist";   

            }else{
                echo"not exist";  
            }
            
            $Conx->close();
        }

     
         
    // $Result = mysqli_query($Conx, "SELECT * FROM USERS WHERE EMAIL = '$Email'");
    
    }
    

?>
