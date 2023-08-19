const axios = require('axios');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Hoặc bạn có thể đặt nguồn truy cập cụ thể ở đây
    },
});

const COMMENTS_URL = "http://localhost/my-vue-app/server/databases/postcomment.php";
const GET_COMMENTS_URL = "http://localhost/my-vue-app/server/databases/get_data_comment.php";

// Hàm gửi yêu cầu đến server PHP và xử lý phản hồi
const sendRequest = async (url, data, successEvent, socket) => {
    try {
        const response = await axios.post(url, data);
        console.log("Server response:", response.data);
        socket.emit(successEvent, response.data);
    } catch (error) {
        console.error("Lỗi khi gửi yêu cầu:", error);
    }
};

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('new-comment', async (dataComment) => {
        try {
            const newComment = await sendRequest(COMMENTS_URL, dataComment);

            // Gửi thông báo cho tất cả các client với comment mới
            io.emit('new-comment', newComment);

            // Gọi hàm xử lý thay đổi dữ liệu trên máy chủ khi có sự thay đổi
            handleDataChange();
        } catch (error) {
            console.error("Lỗi khi gửi bình luận:", error);
        }
    });

    socket.on('getPostData', async (id) => {
        console.log("id", id);
        try {
            const response = await axios.post(GET_COMMENTS_URL, { id });
            const responseData = response.data;

            // Gửi dữ liệu trả về từ API đến client qua sự kiện 'commentsData'
            socket.emit('commentsData', responseData);
            console.log(response);
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu từ API:", error);
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Xử lý thay đổi dữ liệu trên máy chủ
const handleDataChange = () => {
    // Thực hiện các thay đổi trong dữ liệu ở đây

    // Sau khi có sự thay đổi trong dữ liệu
    // Gửi thông báo đến tất cả các client rằng có sự thay đổi
    io.emit('data-updated');
}

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
