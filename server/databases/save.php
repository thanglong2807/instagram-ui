// require_once 'vendor/autoload.php';

// use ElephantIO\Client;
// use ElephantIO\Engine\SocketIO\Version2X;
// // Database connection and data retrieval code (as shown in the previous PHP code)

// // Rest of your PHP code


// header('Content-Type: application/json');

// $server = new Version2X('http://localhost:3000');
// $server->initialize();
// // Database connection
// $conn = mysqli_connect("localhost", "root", "", "instargram_data");

// // Check if the connection was successful
// if (!$conn) {
// die("Connection failed: " . mysqli_connect_error());
// }

// // Fetch data using the SQL query with JOINs
// $sql = "SELECT
// posts_data.*,
// user_data.username AS post_owner_username,
// user_data.email AS post_owner_email,
// user_data.avatar AS post_owner_avatar,
// COUNT(DISTINCT like_data.user_id) AS liked_by_user_count,
// GROUP_CONCAT(DISTINCT comment_data.user_id) AS commented_by_user_ids,
// GROUP_CONCAT(DISTINCT comment_data.comment) AS comments,
// GROUP_CONCAT(DISTINCT commenters.username) AS commenter_usernames,
// GROUP_CONCAT(DISTINCT commenters.email) AS commenter_emails,
// GROUP_CONCAT(DISTINCT commenters.avatar) AS commenter_avatars
// FROM posts_data
// INNER JOIN user_data ON posts_data.user_id = user_data.user_id
// LEFT JOIN like_data ON posts_data.post_id = like_data.post_id
// LEFT JOIN comment_data ON posts_data.post_id = comment_data.post_id
// LEFT JOIN user_data AS commenters ON comment_data.user_id = commenters.user_id
// GROUP BY posts_data.post_id;";

// $result = mysqli_query($conn, $sql);

// // Check if there are any rows returned
// if (mysqli_num_rows($result) > 0) {
// // Fetch data and store it in an array
// $data = array();
// while ($row = mysqli_fetch_assoc($result)) {
// $data[] = $row;
// }
// // Output the data in JSON format
// echo json_encode($data);
// } else {
// // No data found
// echo json_encode(array('message' => 'No data found.'));
// }

// // Close the connection
// mysqli_close($conn);


// Database connection and data retrieval code (as shown in your PHP code)

// Rest of your PHP code

// Import the necessary libraries