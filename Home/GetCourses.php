<?php
 
 class Course {
    public $IDCOURSE;
    public $IMAGE;
    public $TITLE;
    public $PRICE;
  
  }
  
if ($_SERVER['REQUEST_METHOD'] === 'GET'){

    // Connect to the database mysqli_real_escape_string($dbc, trim($_POST['Email']));
        // connect to the database

        $Query = "SELECT IDCOURSE, IMG_URL , TITLE, PRICE FROM courses;";
        $Conx = mysqli_connect("localhost","root","","webcourses_db");
      
       
        // fetch data from the database
        $result = mysqli_query($Conx, $Query);

        // create an array to store the data

        // loop through the data and add it to the array
        $D = array();

        if(mysqli_num_rows($result) > 0)
        {
            while ($row = mysqli_fetch_assoc($result)) 
            {
                
                // $C = new Course();
                // $C->IDCOURSE = $row['IDCOURSE'];
                // $C->IMAGE = $row['IMAGE'];
                // $C->TITLE =$row['TITLE']
                // $C->PRICE = $row['PRICE'];
                if($row){
                    $D[]  = $row;
                }
                
            }
            $json_data = json_encode($D,JSON_PRETTY_PRINT);

            echo $json_data;
        } else echo "nod t9owed";
     
      
        // output the JSON data object as a JavaScript object 
        //echo "| ".$data["IDCOURSE"]." | ".$data["IMAGE"]." | ".$data["TITLE"]." | ".$data["PRICE"]." |";
     
        
        // close the connection to the database
        mysqli_close($Conx); 
        // convert the data array to a JSON string
        // output the JSON string  


}


?>