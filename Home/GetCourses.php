<?php
 

if ($_SERVER['REQUEST_METHOD'] === 'GET'){

    // Connect to the database mysqli_real_escape_string($dbc, trim($_POST['Email']));
        // connect to the database

        $Query = "SELECT * FROM courses";
        $Conx = mysqli_connect("localhost","root","","webcourses_db");
        header('Content-Type: application/string');
        // check for connection errors
       
        // fetch data from the database
        $result = mysqli_query($Conx, $Query);

        // create an array to store the data
        $data = array();

        // loop through the data and add it to the array
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
 
      
        // output the JSON data object as a JavaScript object 
        //echo "| ".$data["IDCOURSE"]." | ".$data["IMAGE"]." | ".$data["TITLE"]." | ".$data["PRICE"]." |";
     
        header("Content-Type: application/json; charset=UTF-8");

        echo json_encode($data);
        // close the connection to the database
        mysqli_close($Conx); 
        // convert the data array to a JSON string
        // output the JSON string  


}


?>