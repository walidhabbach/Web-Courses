

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
        $Array = array();
        for ($i=0; $i < 5; $i++) { 
             srand();
             $Array[i] = rand(1,20);
        }
        function afficherTable(){
            for ($i=0; $i < 5; $i++) { 
                echo  $Array[i]+"<br>";
            }
        }
        function moyenTable(){
            $somme = 0;
            for ($i=0; $i < 5; $i++) { 
                $somme+=$Array[i];
            }
            echo $somme/5;
        }
        function supValTable(){
            $Max = $Array[0];
            for ($i=1; $i < 5; $i++) { 
                if( Max<$Array[i]){
                    Max=$Array[i];
                }
            }
            echo $Max;
        }
    ?>
</body>
</html>