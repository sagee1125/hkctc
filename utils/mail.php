<?php

function prepare_mail_w_img($html, $boundary)
{
    preg_match_all('~<img.*?src=.([\/.a-z0-9:_-]+).*?>~si', $html, $matches);
    $i = 0;
    $paths = array();

    foreach ($matches[1] as $img) {
        $img_old = $img;

        if (strpos($img, "http://") === false && strpos($img, "https://") === false) {
            $uri = parse_url($img);
            $paths[$i]['path'] = $_SERVER['DOCUMENT_ROOT'] . $uri['path'];
            $content_id = md5($img);
            $html = str_replace($img_old, 'cid:' . $content_id, $html);
            $paths[$i++]['cid'] = $content_id;
        }
    }

    $multipart = '';
    $multipart .= "--$boundary\r\n";
    $kod = 'utf-8';
    $multipart .= "Content-Type: text/html; charset=$kod\r\n";
    $multipart .= "Content-Transfer-Encoding: Quot-Printed\r\n\r\n";
    $multipart .= "$html\r\n\r\n";

    foreach ($paths as $path) {
        if (file_exists($path['path']))
            $fp = fopen($path['path'], "r");
        if (!$fp) {
            return false;
        }

        $imagetype = substr(strrchr($path['path'], '.'), 1);
        $file = fread($fp, filesize($path['path']));
        fclose($fp);

        $message_part = "";

        switch ($imagetype) {
            case 'png':
            case 'PNG':
                $message_part .= "Content-Type: image/png";
                break;
            case 'jpg':
            case 'jpeg':
            case 'JPG':
            case 'JPEG':
                $message_part .= "Content-Type: image/jpeg";
                break;
            case 'gif':
            case 'GIF':
                $message_part .= "Content-Type: image/gif";
                break;
            case 'svg':
            case 'SVG':
                $message_part .= "Content-Type: image/svg+xml";
                break;
        }

        $message_part .= "; file_name = \"$path\"\r\n";
        $message_part .= 'Content-ID: <' . $path['cid'] . ">\r\n";
        $message_part .= "Content-Transfer-Encoding: base64\r\n";
        $message_part .= "Content-Disposition: inline; filename = \"" . basename($path['path']) . "\"\r\n\r\n";
        $message_part .= chunk_split(base64_encode($file)) . "\r\n";
        $multipart .= "--$boundary\n" . $message_part . "\r\n";
    }

    $multipart .= "--$boundary--\r\n";
    return $multipart;
}
