    <?php

        $q=$_GET['troopid'];

        $con = mysqli_connect("localhost","root","","db_ionicProj");
        $res= mysqli_query($con,"SELECT * FROM tbl_troops WHERE troops_id =".$q);
        $result = array();
        while($row=mysqli_fetch_assoc($res)){
            $result[] = $row;
        }  
        echo json_encode($result);
?>

   