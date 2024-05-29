<?php
$conn=mysqli_connect("144.76.57.59","u2346106_7uGQyxHYhj","QmYnxZcnWWt1Wv.n@6y3Vj1X","s2346106_db1716532568018")
if($conn){
    echo "connected";
}
else{
    echo "failed";
}

$email=$_POST['email'];
$password=$_POST['password'];

$data = "INSERT INTO login VALUES("",'$email','$password')";
$check = mysqli_query($conn,$data);
if($check){
    echo "DATA SENDED";
}
else {
    echo "DATA NOT SAVED";
}

?>