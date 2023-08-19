<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Thay * bằng tên miền của React.js nếu có thể
header('Access-Control-Allow-Methods: GET,POST');
header('Access-Control-Allow-Headers: Content-Type');

// Kết nối tới cơ sở dữ liệu
$conn = mysqli_connect("localhost", "root", "", "instargram_data");

// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}
$post_data = json_decode(file_get_contents("php://input"), true);
$id = $post_data['id'];

// Thực hiện truy vấn SQL để lấy dữ liệu từ cơ sở dữ liệu
$sql = "SELECT
cd.comment_id,
cd.comment,
cd.created_at AS comment_created_at,
ud.username,
ud.avatar
FROM
comment_data cd
JOIN
user_data ud ON cd.user_id = ud.user_id
WHERE cd.post_id ='$id'
";
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