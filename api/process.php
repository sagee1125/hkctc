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

if (isset($_POST)) {
	// 設定預設變數
	$subjectClient = '[TEST] HKCTC Client Email';
	$bodyClient = '<html><body><p>測試電郵</p></body></html>';
	$subjectAdmin = '[TEST] HKCTC Admin Email';

	// 管理員和客戶端的郵件資料
	$adminMail = array("admin@hkctc.gov.hk", "domi.leung@polyu.edu.hk");
	$clientMail = $_POST['u_email'];
	$adminBcc = array('edwardlai@tiffdesign.com.hk');
	$fromAdmin = "system@hkctc.gov.hk";

	// 郵件標題和內容
	$headersToClient = "From: =?utf-8?b?" . base64_encode($fromAdmin) . "?= <$fromAdmin>\r\n";
	foreach (array_merge($adminBcc, array('admin@hkctc.gov.hk')) as $bcc) {
		$headersToClient .= "Bcc: =?utf-8?b?" . base64_encode($bcc) . "?= <$bcc>\r\n";
	}
	$headersToClient .= "Content-Type: text/html;charset=utf-8\r\n";
	$headersToClient .= "Reply-To: " . implode(', ', $adminMail) . "\r\n";

	$headersToAdmin = "From: =?utf-8?b?" . base64_encode("hostmaster@cis.gov.hk") . "?= <hostmaster@cis.gov.hk>\r\n";
	foreach ($adminBcc as $bcc) {
		$headersToAdmin .= "Bcc: =?utf-8?b?" . base64_encode($bcc) . "?= <$bcc>\r\n";
	}
	$headersToAdmin .= "Content-Type: text/plain;charset=utf-8\r\n";

	// 發送郵件
	$sendClient = mail($clientMail, "=?utf-8?b?" . base64_encode($subjectClient) . "?=", $bodyClient, $headersToClient);
	$sendAdmin = mail(implode(', ', $adminMail), "=?utf-8?b?" . base64_encode($subjectAdmin) . "?=", $bodyClient, $headersToAdmin);

	// 輸出結果
	echo $sendClient && $sendAdmin ? "[SUCCESS] Message successfully sent!" : "[FAIL] Message delivery failed...";
}
