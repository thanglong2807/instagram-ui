<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$conn = mysqli_connect("localhost", "root", "", "instargram_data");
if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}
try {
    $post_data = json_decode(file_get_contents("php://input"), true);
    if (isset($post_data['post_id'], $post_data['user_id'])) {
        $post_id = mysqli_real_escape_string($conn, $post_data['post_id']);
        $user_id = mysqli_real_escape_string($conn, $post_data['user_id']);


        $checkQuery = "SELECT * FROM like_data WHERE post_id = ? AND user_id = ?";
        $stmt = mysqli_prepare($conn, $checkQuery);
        mysqli_stmt_bind_param($stmt, "ii", $post_id, $user_id);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        if ($result && mysqli_num_rows($result) > 0) {

            $deleteQuery = "DELETE FROM like_data WHERE post_id = ? AND user_id = ?";
            $stmt = mysqli_prepare($conn, $deleteQuery);
            mysqli_stmt_bind_param($stmt, "ii", $post_id, $user_id);
            mysqli_stmt_execute($stmt);
        } else {

            $insertQuery = "INSERT INTO like_data (post_id, user_id) VALUES (?, ?)";
            $stmt = mysqli_prepare($conn, $insertQuery);
            mysqli_stmt_bind_param($stmt, "ii", $post_id, $user_id);
            mysqli_stmt_execute($stmt);
        }


        $like_count = getLikeCount($conn, $post_id);


        echo json_encode(['like_count' => $like_count]);
    } else {
        echo "Thiếu post_id hoặc user_id.";
    }
} catch (Exception $e) {
    echo "Lỗi: " . $e->getMessage();
}

function getLikeCount($conn, $post_id)
{
    $query = "SELECT COUNT(*) AS like_count FROM like_data WHERE post_id = ?";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "i", $post_id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        return $row['like_count'];
    }

    return 0;
}

mysqli_close($conn);