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
			$bodyClient = '
			<!DOCTYPE html>
			<html>
			<head>
			    <title>[TEST] HKCTC Client Email</title>
			    <style>
			    	body {
			    		font-size: 1.25em;
			    	}
			    </style>
			</head>
			<body>
				<p>測試電郵</p>
			</body>
			</html>';

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


		case 'reg.mail':
			$subjectClient = '[Sample] HKCTC Acknowledgement email (XXX Seminar)';

			if ($_POST['reg-industry'] == 'others') {
				$str_industry = 'Others, please specify: ' . $_POST['reg-ind_other_spec'];
			} else {
				$str_industry = $_POST['reg-industry'];
			}

			$str_how_to_know = "";
			foreach ($_POST['reg-how_to_know'] as $htk) {
				if (!empty($str_how_to_know)) {
					$str_how_to_know .= ' | ';
				}

				if ($htk == 'others') {
					$str_how_to_know .= "Others, please specify: " . $_POST['reg-htk_other_spec'];
				} else {
					$str_how_to_know .= $htk;
				}
			}

			$bodyClient = "
			<!DOCTYPE html>
			<html>
			<head>
			    <title>[Sample] HKCTC Acknowledgement email (XXX Seminar)</title>
			    <style>
			    	body {
			    		font-size: 1rem;
			    	}

			    	table th {
			    		text-align: left;
			    	}
			    </style>
			</head>
			<body>
				<p><img src=\"https://www.hkctc.gov.hk/assets/images/hkctc_logo_en.png\"></p>

				<p>This email serves to acknowledge receipt of your submission of application for the seminar</p>

				<p>Your application details are appended below:</p>

				<table border=\"0\">
					<tr>
						<th>Title</th>
						<td>{$_POST['reg-title']}</td>
					</tr>
					<tr>
						<th>First Name</th>
						<td>{$_POST['reg-first_name']}</td>
					</tr>
					<tr>
						<th>Last Name</th>
						<td>{$_POST['reg-last_name']}</td>
					</tr>
					<tr>
						<th>Email Address</th>
						<td>{$_POST['reg-email']}</td>
					</tr>
					<tr>
						<th>Position</th>
						<td>{$_POST['reg-position']}</td>
					</tr>
					<tr>
						<th>Organiastion</th>
						<td>{$_POST['reg-organisation']}</td>
					</tr>
					<tr>
						<th>Telephone No.</th>
						<td>{$_POST['reg-tel']}</td>
					</tr>
					<tr>
						<th>Country/Region</th>
						<td>{$_POST['reg-country']}</td>
					</tr>
					<tr>
						<th>Attendance Certificate</th>
						<td>{$_POST['reg-att_cert']}</td>
					</tr>
					<tr>
						<th>Full Name for Attendance Certificate (In English only)</th>
						<td>{$_POST['reg-name_for_att_cert']}</td>
					</tr>
					<tr>
						<th>Type of Industry</th>
						<td>{$str_industry}</td>
					</tr>
					<tr>
						<td colspan=\"2\">
							<strong>How did you know about this Seminar? (Can choose more than one)</strong><br>
							{$str_how_to_know}
						</td>
					</tr>
					<tr>
						<td colspan=\"2\">
							<strong>*I agree to receive information from HKCTC, for example, news of seminar activities, e-newsletter, etc.</strong><br>
							{$_POST['reg-agreement']}
						</td>
					</tr>
				</table>

				<p>For correction of or access to personal data after submission of your application(s) or enquiries on recruitment matters, please contact the HKCTC Secretariat:</p>

				<table border=\"0\">
					<tr>
						<td>Address:</td>
						<td>Units 801-04, 8/F, The Hub, 23 Yip Kan Street, <br>
						 Wong Chuk Hang, Hong Kong</td>
					</tr>
					<tr>
						<td>Fax:</td>
						<td>3691 8655</td>
					</tr>
					<tr>
						<td>Email:</td>
						<td><a href=\"mailto:secretariat_hkctc@itc.gov.hk\">secretariat_hkctc@itc.gov.hk</a></td>
					</tr>
				</table>

				<p>HKCTC Secretariat</p>

				<hr>

				<p><img src=\"https://www.hkctc.gov.hk/assets/images/hkctc_logo_tc.png\"></p>

				<p>此電郵確認已收到你就研討會的申請。</p>

				<p>你的網上申請資料如下：</p>

				<table border=\"0\">
					<tr>
						<th>稱謂</th>
						<td>{$_POST['reg-title']}</td>
					</tr>
					<tr>
						<th>名字</th>
						<td>{$_POST['reg-first_name']}</td>
					</tr>
					<tr>
						<th>姓氏</th>
						<td>{$_POST['reg-last_name']}</td>
					</tr>
					<tr>
						<th>電郵地址</th>
						<td>{$_POST['reg-email']}</td>
					</tr>
					<tr>
						<th>職位</th>
						<td>{$_POST['reg-position']}</td>
					</tr>
					<tr>
						<th>機構</th>
						<td>{$_POST['reg-organisation']}</td>
					</tr>
					<tr>
						<th>電話號碼</th>
						<td>{$_POST['reg-tel']}</td>
					</tr>
					<tr>
						<th>國家/地區</th>
						<td>{$_POST['reg-country']}</td>
					</tr>
					<tr>
						<th>出席證明書</th>
						<td>{$_POST['reg-att_cert']}</td>
					</tr>
					<tr>
						<th>出席證明書所載的英文全名</th>
						<td>{$_POST['reg-name_for_att_cert']}</td>
					</tr>
					<tr>
						<th>行業</th>
						<td>{$str_industry}</td>
					</tr>
					<tr>
						<td colspan=\"2\">
							<strong>您如何知道這次研討會? (可以選擇多個)</strong><br>
							{$str_how_to_know}
						</td>
					</tr>
					<tr>
						<td colspan=\"2\">
							<strong>*本人願意接收香港檢測和認證局的資訊，例如研討會活動消息、電子通訊等。</strong><br>
							{$_POST['reg-agreement']}
						</td>
					</tr>
				</table>

				<p>提交申請後如果你需要更改或查詢個人資料，或查詢與上述申請有關事宜，請與香港檢測和認證局秘書處聯絡：</p>

				<table border=\"0\">
					<tr>
						<td>地址︰</td>
						<td>香港黃竹坑業勤街23號The Hub 8樓801-04室</td>
					</tr>
					<tr>
						<td>傳真號碼︰</td>
						<td>3691 8655</td>
					</tr>
					<tr>
						<td>電郵地址︰</td>
						<td><a href=\"mailto:secretariat_hkctc@itc.gov.hk\">secretariat_hkctc@itc.gov.hk</a></td>
					</tr>
				</table>

			</body>
			</html>";

			$subjectAdmin = '[Sample] HKCTC For Admin email (XXX Seminar)';

			// Admin email info
			$admin1 = "hostmaster@cis.gov.hk"; // Admin email sender
			$admin_mail = array("admin@hkctc.gov.hk", "domi.leung@polyu.edu.hk", "secretariat_hkctc@itc.gov.hk");
			$admin_bcc = array('edwardlai@tiffdesign.com.hk');



			// Client email info			
			$fromadmin = "system@hkctc.gov.hk"; // Client email sender
			$client_mail = $_POST['reg-email'];
			$client_bcc = array('admin@hkctc.gov.hk', 'domi.leung@polyu.edu.hk', 'edwardlai@tiffdesign.com.hk', 'secretariat_hkctc@itc.gov.hk');


			/* -- For test --*/
			// $admin_mail = array( 'admin@admin.com', 'edwardlai@tiffdesign.com.hk' ); // this is your Email address
			// $admin_bcc = array( 'admin@admin.com' );
			// $client_bcc = array( 'edwardlai@tiffdesign.com.hk' );


			/* ===== Admin email ======*/
			// $bodyHead = "IP Address : ".getRealIpAddr()."\r\n";
			$bodyHead .= "<table border=\"0\"><tr><th>Title 稱謂</th><td>{$_POST['reg-title']}</td></tr><tr><th>First Name 名字</th><td>{$_POST['reg-first_name']}</td></tr><tr><th>Last Name 姓氏</th><td>{$_POST['reg-last_name']}</td></tr><tr><th>Email Address 電郵地址</th><td>{$_POST['reg-email']}</td></tr><tr><th>Position 職位</th><td>{$_POST['reg-position']}</td></tr><tr><th>Organiastion 機構</th><td>{$_POST['reg-organisation']}</td></tr><tr><th>Telephone No. 電話號碼</th><td>{$_POST['reg-tel']}</td></tr><tr><th>Country/Region 國家/地區</th><td>{$_POST['reg-country']}</td></tr><tr><th>Attendance Certificate 出席證明書</th><td>{$_POST['reg-att_cert']}</td></tr><tr><th>Full Name for Attendance Certificate (In English only) <br>出席證明書所載的英文全名</th><td>{$_POST['reg-name_for_att_cert']}</td></tr><tr><th>Type of Industry 行業</th><td>{$str_industry}</td></tr><tr><td colspan=\"2\"><strong>How did you know about this Seminar? (Can choose more than one) <br>您如何知道這次研討會? (可以選擇多個)</strong><br>{$str_how_to_know}</td></tr><tr><td colspan=\"2\"><strong>*I agree to receive information from HKCTC, for example, news of seminar activities, e-newsletter, etc. <br>*本人願意接收香港檢測和認證局的資訊，例如研討會活動消息、電子通訊等。 </strong><br>{$_POST['reg-agreement']}</td></tr></table>";

			// $bodyHead .= "Send Time : ".date("d M Y H:i")."\r\n";
			// $bodyHead .= "Title 稱謂 : ".$_POST['reg-title']."\r\n";
			// $bodyHead .= "First Name 名字 : ".$_POST['reg-first_name']."\r\n";
			// $bodyHead .= "Last Name 姓氏 : ".$_POST['reg-last_name']."\r\n";
			// $bodyHead .= "Email Address 電郵地址 : ".$_POST['reg-email']."\r\n";
			// $bodyHead .= "Position 職位 : ".$_POST['reg-position']."\r\n";
			// $bodyHead .= "Organiastion 機構 : ".$_POST['reg-organisation']."\r\n";
			// $bodyHead .= "Telephone No. 電話號碼 : ".$_POST['reg-tel']."\r\n";
			// $bodyHead .= "Country/Region 國家/地區 : ".$_POST['reg-country']."\r\n";
			// $bodyHead .= "Attendance Certificate 出席證明書 : ".$_POST['reg-att_cert']."\r\n";
			// $bodyHead .= "Full Name for Attendance Certificate (In English only) 出席證明書所載的英文全名 : \r\n".$_POST['reg-name_for_att_cert']."\r\n";
			// $bodyHead .= "Type of Industry 行業 : ".$str_industry."\r\n";
			// $bodyHead .= "How did you know about this Seminar? (Can choose more than one) 您如何知道這次研討會? (可以選擇多個) : \r\n".$str_how_to_know."\r\n";
			// $bodyHead .= "*I agree to receive information from HKCTC, for example, news of seminar activities, e-newsletter, etc. *本人願意接收香港檢測和認證局的資訊，例如研討會活動消息、電子通訊等。 : \r\n".$_POST['reg-agreement']."\r\n";
			$bodyHead .= "\r\n";
			/* ===== END Admin email ===== */

			$encrypt_ad_mail = true;

			break;


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
	if ($client_mail_w_img) {
		$boundary = "--" . md5(uniqid(time()));
		$headersToClient .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

		$bodyClient = prepare_mail_w_img($bodyClient, $boundary);
	} else {
		$headersToClient .= "Content-Type: text/html;charset=utf-8\r\n";
	}
	$headersToClient .= "Reply-To: $admin_mail\r\n";
	$headersToClient .= "X-Mailer: PHP/" . phpversion();


	$sA =  $admin_mail_headers['Subject'];
	$headers = "MIME-Version: 1.0\r\n";
	$headersToAdmin = $headerToAdmin;
	$headersToAdmin .= "X-Mailer: " . $admin_mail_headers['X-Mailer'] . "\r\n";
	if ($encrypt_ad_mail) {
		$headersToAdmin .= "Content-Disposition: attachment; filename=\"" . $admin_mail_filename . "\"\r\n";
		$headersToAdmin .= "Content-Type: text/plain;charset=utf-8\r\n";
		$headersToAdmin .= "Content-Transfer-Encoding: 8bit\r\n";

		$bodyHead = secured_encrypt($bodyHead);
	} else {
		$headersToAdmin .= "Content-Type: text/plain;charset=utf-8\r\n";
	}
	$headersToAdmin .= "\n";


	mail($client_mail, $sC, $bodyClient, $headersToClient);
	if (mail($admin_mail, $sA, $bodyHead, $headersToAdmin)) {
		echo "[SUCCESS] Message successfully sent!";
	} else {
		echo "[FAIL] Message delivery failed...";
	}
}
