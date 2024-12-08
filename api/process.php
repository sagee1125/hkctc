<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// 如果是 OPTIONS 請求，返回 200 狀態碼
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	http_response_code(200);
	exit();
}

date_default_timezone_set('Asia/Hong_Kong'); // 設定時區

// 郵件發送函數
function sendMail($to, $subject, $body, $from, $bcc = [], $isHtml = false)
{
	$headers = "From: =?utf-8?b?" . base64_encode($from) . "?= <$from>\r\n";
	foreach ($bcc as $bccEmail) {
		$headers .= "Bcc: =?utf-8?b?" . base64_encode($bccEmail) . "?= <$bccEmail>\r\n";
	}
	$headers .= $isHtml ? "Content-Type: text/html;charset=utf-8\r\n" : "Content-Type: text/plain;charset=utf-8\r\n";
	return mail($to, "=?utf-8?b?" . base64_encode($subject) . "?=", $body, $headers);
}

if ($_POST) {
	// 預設變數
	$subjectClient = '[TEST] HKCTC Client Email';
	$bodyClient = '<html><body><p>測試電郵</p></body></html>';
	$subjectAdmin = '[TEST] HKCTC Admin Email';

	// 郵件設定
	$adminMail = ["admin@hkctc.gov.hk", "domi.leung@polyu.edu.hk"];
	$clientMail = $_POST['u_email'];
	$adminBcc = ['edwardlai@tiffdesign.com.hk'];
	$fromAdmin = "system@hkctc.gov.hk";

	// 發送郵件
	$sendClient = sendMail($clientMail, $subjectClient, $bodyClient, $fromAdmin, array_merge($adminBcc, [$fromAdmin]), true);
	$sendAdmin = sendMail(implode(', ', $adminMail), $subjectAdmin, $bodyClient, "hostmaster@cis.gov.hk", $adminBcc);

	// 輸出結果
	echo $sendClient && $sendAdmin ? "[SUCCESS] Message successfully sent!" : "[FAIL] Message delivery failed...";
}
