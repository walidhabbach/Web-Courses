<?php
     session_start();
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){

        $userData = json_decode(file_get_contents('php://input'), true);
        $Conx = mysqli_connect("localhost","root","","webcourses_db"); 
        
        if($Conx==false){
            echo "error conx";
       }else{
            $Email = $userData['Email'];   
            $Password = $userData['Password']; 
           
                $Command = mysqli_query($Conx,"Select IDUSER, USERNAME,EMAIL, USER_PASSWORD from users where EMAIL='$Email' and USER_PASSWORD='$Password';");
                if(mysqli_num_rows($Command) == 1){  

                    while ($row = mysqli_fetch_assoc($Command)) {
                        $_SESSION['IDUSER'] = $row['IDUSER'] ;
                        $_SESSION['USERNAME'] = $row['USERNAME'] ; 
                    }
                    echo "exist";   

                }else{
                    echo"not exist";  
                }    
                
            }
            
            $Conx->close();
        }  

?>
