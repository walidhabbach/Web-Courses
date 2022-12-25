<?php
 
    $Conx = mysqli_connect("localhost","root","","webcourses_db");
     // Connect to the database mysqli_real_escape_string($dbc, trim($_POST['Email']));

    $Username = $_POST['Username'];
    $Email = $_POST['Email'];   
    $Password = $_POST['Password'];
    if($Conx==false){
        echo "error conx";
    }else{

        if(mysqli_query($Conx,"Select IDUSER from users where USERNAME='$Username'and EMAIL='$Email' and USER_PASSWORD='$Password')")){
          
        }else{
             
        } 
        $Conx->close();
    }
   // $Result = mysqli_query($Conx, "SELECT * FROM USERS WHERE EMAIL = '$Email'");
   

?>
