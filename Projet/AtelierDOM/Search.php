<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'GET'){

    // Connect to the database mysqli_real_escape_string($dbc, trim($_POST['Email']));
        // connect to the database

        $Data = json_decode(file_get_contents('php://input'), true);

      
         // Connect to the database mysqli_real_escape_string($dbc, trim($_POST['Email']));
    
 
       // $Query = "SELECT * FROM courses where  TITLE like 'w%' ;";
      
      
        $Conx = mysqli_connect("localhost","root","","webcourses_db");
      
        echo json_encode($Data);
        // fetch data from the database
        $result = mysqli_query($Conx, $Data);

        // create an array to store the data

        // loop through the data and add it to the array
        $data = array();

        if(mysqli_num_rows($result) > 0)
        {
            while ($row = mysqli_fetch_assoc($result)) 
            {
                $data[]  = $row;  
            }
            $json_data = json_encode($data,JSON_PRETTY_PRINT);

            echo $json_data;
        } else echo json_encode("empty",JSON_PRETTY_PRINT);
     

        // output the JSON data object as a JavaScript object 
        //echo "| ".$data["IDCOURSE"]." | ".$data["IMAGE"]." | ".$data["TITLE"]." | ".$data["PRICE"]." |";
     
        
        // close the connection to the database
        mysqli_close($Conx); 
        // convert the data array to a JSON string
        // output the JSON string  


}


?>