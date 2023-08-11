<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$post_data = json_decode(file_get_contents("php://input"), true);
$comments = $post_data['comments'];
echo $comments;
