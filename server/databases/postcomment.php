<?php



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$conn = mysqli_connect("localhost", "root", "", "instargram_data");
if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}

// Get POST data
$post_data = json_decode(file_get_contents("php://input"), true);

// Extract data
$comments = $post_data['comments'];
$post_id = $post_data['post_id'];
$user_id = $post_data['user_id'];
$create_at = date("Y-m-d H:i:s"); // Current datetime

// Insert comment into database
$insert_query = "INSERT INTO comment_data (post_id, user_id, comment, created_at) VALUES ('$post_id', '$user_id',
'$comments', '$create_at')";

if (mysqli_query($conn, $insert_query)) {
    echo "Comment đã được thêm thành công!";
} else {
    echo "Lỗi: " . mysqli_error($conn);
}

mysqli_close($conn);
