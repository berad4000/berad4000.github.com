<?php
#YOUR E-MAIL
define('TO', 'test@test.com');
#$referer=trim($_SERVER['HTTP_REFERER']);
header('Content-Type: text/html; charset=utf-8');
#header("Location: $referer");
##E-MAIL SUBJECT
#define('SUBJECT', '');
function sendEmail($to, $from, $subj, $body)
{
	$date = date( 'r' );
	$phpversion = phpversion();
	$boundary = md5( time() );
	$headers = "From: $from\n"."Date: $date\n"."Content-Type: text/html; charset=\"UTF-8\"\n";
	mail(trim($to), trim($subj), $body, $headers );
}
sendEmail(TO, trim($_POST['email']), $_POST['subject'], 'E-Mail from: '.$_POST['name'].'<br/><br/>Message: '.nl2br($_POST['message']));

?>