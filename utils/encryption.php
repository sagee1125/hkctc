<!-- Function for encrypting mail content -->


<?php
function secured_encrypt($data)
{
    $first_key = file_get_contents("key1.hkctc");
    $first_key = base64_decode($first_key);
    $second_key = file_get_contents("key2.hkctc");
    $second_key = base64_decode($second_key);

    $method = "aes-256-cbc";
    $iv_length = openssl_cipher_iv_length($method);
    $iv = openssl_random_pseudo_bytes($iv_length);

    $first_encrypted = openssl_encrypt($data, $method, $first_key, OPENSSL_RAW_DATA, $iv);
    $second_encrypted = hash_hmac('sha3-512', $first_encrypted, $second_key, true);

    $output = base64_encode($iv . $second_encrypted . $first_encrypted);
    return $output;
}
?>