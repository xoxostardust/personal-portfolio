<?php
if($POST['submit'])
{
    // error message for blank form
    echo "Error; you must submit the form.";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// form validation
if(empty($name)||empty($visitor_email))
{
    echo "Please enter your name and email."
    exit;
}


$email_from = "GabrielleYeager005@gmail.com";
$email_subject = "New Form Submitted!";
$email_body = "New message from $name."
    "Email Address: $visitor_email"
    "Subject: $subject"
    "Message: $message"

$to = "GabrielleYeager005@gmail.com";
$headers = "From $email_from"
$headers .= "Reply-to: $visitor_email"

// sends email
mail($to,$email_subject,$email_body,$headers)


function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}
?>