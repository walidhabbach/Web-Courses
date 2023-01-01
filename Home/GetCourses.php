<?php 
if ($_SERVER['REQUEST_METHOD'] === 'GET'){
 
        $Query = "SELECT IDCOURSE, IMG_URL , TITLE, PRICE , CATEGORY FROM courses;";
        $Conx = mysqli_connect("localhost","root","","webcourses_db");
      
       
        // fetch data from the database
        $result = mysqli_query($Conx, $Query); 
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
      
        mysqli_close($Conx);  

}

?>