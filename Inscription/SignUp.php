<?php
 
    $Conx = mysqli_connect("localhost","root","","webcourses_db");
     // Connect to the database mysqli_real_escape_string($dbc, trim($_POST['Email']));

        $Username = $_POST['Username'];
        $Email = $_POST['Email'];   
        $Password = $_POST['Password'];
    if($Conx==false){
        echo "error conx";
    }else{

         $Query = "SELECT * FROM users WHERE email = '$Email' ";
         $result = mysqli_query($Conx, $select);

        if(mysqli_num_rows($result) > 0){
            $response = 'Email already exist!';
            echo json_encode($response);

        }else{
            if(mysqli_query($Conx,"INSERT INTO users (USERNAME, EMAIL, USER_PASSWORD) VALUES ('$Username', '$Email', '$Password')")){
                $response = 'Your account has been successfully created';
                echo json_encode($response);
            }
        }

        $Conx->close();
    }
   // $Result = mysqli_query($Conx, "SELECT * FROM USERS WHERE EMAIL = '$Email'");
 

?>
