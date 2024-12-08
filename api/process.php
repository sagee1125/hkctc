<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
require_once '../utils/encryption.phps';
require_once '../utils/prepare_mail_w_img.phps';

// 如果是 OPTIONS 請求，直接返回 200，避免不必要的處理
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	http_response_code(200);
	exit();
}

error_reporting(E_ERROR);
ini_set('display_errors', '1'); // debug

date_default_timezone_set('Asia/Hong_Kong');


if (isset($_POST)) {

	/* ======= Default setting ========== */
	$admin_mail_filename = date("Y-m-d-H-i") . "-hkctc.txt";
	$client_mail_w_img = false;		// is any photos in client message
	$encrypt_ad_mail = false;		// is need to encrypt admin email
	/* ================================== */

	switch ($_POST['do']) {
		case 'test.mail':
			$subjectClient = '[TEST] HKCTC Client Email';
			$bodyClient = '<html><body><p>測試電郵</p></body></html>';



			$subjectAdmin = '[TEST] HKCTC Admin Email';

			// Admin email info
			$admin1 = "hostmaster@cis.gov.hk"; // Admin email sender
			$admin_mail = array("admin@hkctc.gov.hk", "domi.leung@polyu.edu.hk");
			$admin_bcc = array('edwardlai@tiffdesign.com.hk');

			// $admin_mail = array( 'admin@admin.com', 'edwardlai@tiffdesign.com.hk' ); // this is your Email address
			// $admin_bcc = array( 'admin@admin.com' );

			// Client email info			
			$fromadmin = "system@hkctc.gov.hk"; // Client email sender
			$client_mail = $_POST['u_email'];
			$client_bcc = array('admin@hkctc.gov.hk', 'domi.leung@polyu.edu.hk', 'edwardlai@tiffdesign.com.hk');

			// $client_bcc = array( 'edwardlai@tiffdesign.com.hk' );


			/* ===== Admin email ======*/
			// $bodyHead = "IP Address : ".getRealIpAddr()."\r\n";
			$bodyHead .= "Send Time : " . date("d M Y H:i") . "\r\n";
			$bodyHead .= "Name : " . $_POST['u_name'] . "\r\n";
			$bodyHead .= "E-mail address : " . $client_mail . "\r\n";
			$bodyHead .= "\r\n";
			/* ===== END Admin email ===== */

			$encrypt_ad_mail = true;

			break;


			// case 'reg.mail':


		default:
			echo "[FAIL] Message delivery failed...";
			exit();

			break;
	}

	// use comma to separate the email addresses
	$admin_mail = implode(', ', array_filter($admin_mail));

	// ready the headers array for To Admin Email
	$admin_mail_headers = array(
		"From" => $admin1,
		"To" => $admin_mail,
		"Subject" => "=?utf-8?b?" . base64_encode($subjectAdmin) . "?=",
		"X-Mailer" => "PHP/" . phpversion()
	);


	$headerToClient = "From: =?utf-8?b?" . base64_encode($fromadmin) . "?= <" . $fromadmin . ">\r\n";
	foreach ($client_bcc as $cb) {
		$headerToClient .= "Bcc: =?utf-8?b?" . base64_encode($cb) . "?= <" . $cb . ">\r\n";
	}

	$headerToAdmin = "From: =?utf-8?b?" . base64_encode($admin1) . "?= <" . $admin1 . ">\r\n";
	// Admin Header BCC
	foreach ($admin_bcc as $ab) {
		$headerToAdmin .= "Bcc: =?utf-8?b?" . base64_encode($ab) . "?= <" . $ab . ">\r\n";
	}

	$sC = "=?utf-8?b?" . base64_encode($subjectClient) . "?=";
	$headers = "MIME-Version: 1.0\r\n";
	$headersToClient = $headerToClient;
	// Change the header if have images
	// if ($client_mail_w_img) {
	// 	$boundary = "--" . md5(uniqid(time()));
	// 	$headersToClient .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

	// 	$bodyClient = prepare_mail_w_img($bodyClient, $boundary);
	// } else {
	// 	$headersToClient .= "Content-Type: text/html;charset=utf-8\r\n";
	// }
	$headersToClient .= "Content-Type: text/html;charset=utf-8\r\n";

	$headersToClient .= "Reply-To: $admin_mail\r\n";
	$headersToClient .= "X-Mailer: PHP/" . phpversion();


	$sA =  $admin_mail_headers['Subject'];
	$headers = "MIME-Version: 1.0\r\n";
	$headersToAdmin = $headerToAdmin;
	$headersToAdmin .= "X-Mailer: " . $admin_mail_headers['X-Mailer'] . "\r\n";
	// if ($encrypt_ad_mail) {
	// 	$headersToAdmin .= "Content-Disposition: attachment; filename=\"" . $admin_mail_filename . "\"\r\n";
	// 	$headersToAdmin .= "Content-Type: text/plain;charset=utf-8\r\n";
	// 	$headersToAdmin .= "Content-Transfer-Encoding: 8bit\r\n";

	// 	$bodyHead = secured_encrypt($bodyHead);
	// } else {
	// 	$headersToAdmin .= "Content-Type: text/plain;charset=utf-8\r\n";
	// }
	$headersToAdmin .= "Content-Type: text/plain;charset=utf-8\r\n";

	$headersToAdmin .= "\n";


	mail($client_mail, $sC, $bodyClient, $headersToClient);
	if (mail($admin_mail, $sA, $bodyHead, $headersToAdmin)) {
		echo "[SUCCESS] Message successfully sent!";
	} else {
		echo "[FAIL] Message delivery failed...";
	}
}
