<?php

  if (isset($_POST['submit'])) {
    $mailTo = 'firm.accuracy.acc@gmail.com';
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $emailFrom = $_POST['email'];
    $business = $_POST['business'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $headers = "From: ".$emailFrom;
    $txt = "An email has come in from ".$name." (".$emailFrom.", ".$phone.").\n\n".$business." requests an appointment on ".$date." at ".$time.".";

    mail($mailTo, $subject, $txt, $headers);
  }
?>
