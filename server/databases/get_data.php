<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Thay * bằng tên miền của React.js nếu có thể
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Kết nối tới cơ sở dữ liệu
$conn = mysqli_connect("localhost", "root", "", "instargram_data");

// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}

// Thực hiện truy vấn SQL để lấy dữ liệu từ cơ sở dữ liệu
$sql = "SELECT
posts_data.*,
user_data.username AS post_owner_username,
user_data.email AS post_owner_email,
user_data.avatar AS post_owner_avatar,
COUNT(DISTINCT like_data.user_id) AS liked_by_user_count,
GROUP_CONCAT(DISTINCT comment_data.user_id) AS commented_by_user_ids,
GROUP_CONCAT(DISTINCT comment_data.comment) AS comments,
GROUP_CONCAT(DISTINCT commenters.username) AS commenter_usernames,
GROUP_CONCAT(DISTINCT commenters.email) AS commenter_emails,
GROUP_CONCAT(DISTINCT commenters.avatar) AS commenter_avatars
FROM posts_data
INNER JOIN user_data ON posts_data.user_id = user_data.user_id
LEFT JOIN like_data ON posts_data.post_id = like_data.post_id
LEFT JOIN comment_data ON posts_data.post_id = comment_data.post_id
LEFT JOIN user_data AS commenters ON comment_data.user_id = commenters.user_id
GROUP BY posts_data.post_id;";
$result = mysqli_query($conn, $sql);

// Kiểm tra và trả về dữ liệu dưới dạng JSON
if (mysqli_num_rows($result) > 0) {
    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode([]);
}

// Đóng kết nối cơ sở dữ liệu
mysqli_close($conn);