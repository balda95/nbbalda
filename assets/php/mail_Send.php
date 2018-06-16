<?php
	if(isset($_POST['submit'])){
		$name = $_POST['name'];
		$subject = $_POST['subject'];
		$mailFrom = $_POST['mail'];
		$message = $_POST['message'];

		$mailTo = 'baldaa95@naver.com';
		$headers = "From : ".$mailFrom;
		$txt = "Email from ".$name.".\n\n".$message;

		mail($mailTo, $subject, $txt, $headers);
		header("Location : index.php?mailsend");
	}