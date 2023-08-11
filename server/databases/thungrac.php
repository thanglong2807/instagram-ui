// try {
// if (isset($_POST['post_id']) && isset($_POST['user_id'])) {
// $post_id = $_POST['post_id'];
// $user_id = $_POST['user_id'];

// // Connect to the database using MySQLi
// $db = new mysqli('localhost', 'root', '', 'instargram_data');

// if ($db->connect_error) {
// die("Connection failed: " . $db->connect_error);
// }

// // Check if the combination exists
// $query = "SELECT * FROM likes WHERE post_id = ? AND user_id = ?";
// $stmt = $db->prepare($query);
// $stmt->bind_param('ii', $post_id, $user_id);
// $stmt->execute();
// $result = $stmt->get_result();
// $exists = $result->fetch_assoc();

// if ($exists) {
// // If it exists, perform delete operation
// $deleteQuery = "DELETE FROM likes WHERE post_id = ? AND user_id = ?";
// $deleteStmt = $db->prepare($deleteQuery);
// $deleteStmt->bind_param('ii', $post_id, $user_id);
// $deleteStmt->execute();

// $like_count = getLikeCount($db, $post_id); // Function to get like count
// } else {
// // If it doesn't exist, perform insert operation
// $insertQuery = "INSERT INTO likes (post_id, user_id) VALUES (?, ?)";
// $insertStmt = $db->prepare($insertQuery);
// $insertStmt->bind_param('ii', $post_id, $user_id);
// $insertStmt->execute();

// $like_count = getLikeCount($db, $post_id); // Function to get like count
// }

// // Return the updated like count as JSON
// echo json_encode(['like_count' => $like_count]);

// // Close the database connection
// $db->close();
// } else {
// echo "Missing post_id or user_id.";
// }
// } catch (Exception $e) {
// echo "Error: " . $e->getMessage();
// }

// function getLikeCount($db, $post_id)
// {
// // You would need to implement this function to get the updated like count
// // from your database based on the post_id using MySQLi
// // Example query: SELECT COUNT(*) FROM likes WHERE post_id = ?
// // Return the actual like count value
// return 0; // Replace with your logic
// }