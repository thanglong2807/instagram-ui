-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 11, 2023 lúc 01:59 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `instargram_data`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_data`
--

CREATE TABLE `comment_data` (
  `comment_id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `comment_data`
--

INSERT INTO `comment_data` (`comment_id`, `post_id`, `user_id`, `comment`, `created_at`) VALUES
(1, 1, 3, 'Comment on Post 1', '2023-08-01 07:55:12'),
(2, 1, 1, 'Another comment on Post 1', '2023-08-01 07:55:12'),
(3, 2, 2, 'Comment on Post 2', '2023-08-01 07:55:12'),
(4, 2, 3, 'Another comment on Post 2', '2023-08-01 07:55:12'),
(5, 3, 1, 'Comment on Post 3', '2023-08-01 07:55:12'),
(6, 3, 3, 'Another comment on Post 3', '2023-08-01 07:55:12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `like_data`
--

CREATE TABLE `like_data` (
  `like_id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `like_data`
--

INSERT INTO `like_data` (`like_id`, `post_id`, `user_id`, `created_at`) VALUES
(26, 1, 2, '2023-08-01 07:54:58'),
(28, 2, 3, '2023-08-01 07:54:58'),
(30, 3, 2, '2023-08-01 07:54:58'),
(64, 1, 1, '2023-08-11 09:01:48');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `likes` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts_data`
--

CREATE TABLE `posts_data` (
  `post_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `posts_data`
--

INSERT INTO `posts_data` (`post_id`, `title`, `content`, `created_at`, `user_id`) VALUES
(1, 'https://haycafe.vn/wp-content/uploads/2022/02/anh-meo-cute-hinh-cute-meo.jpg', 'Content of Post 1', '2023-08-01 07:51:21', 1),
(2, 'https://i.pinimg.com/736x/74/b1/10/74b110781d66cd3b501bc85c469f93be.jpg', 'Content of Post 2', '2023-08-01 07:51:21', 2),
(3, 'https://static.wixstatic.com/media/9d8ed5_b8fcc13f08fc4374bb1f979e032b0eb7~mv2.jpg/v1/fit/w_600,h_567,al_c,q_20,enc_auto/file.jpg', 'Content of Post 3', '2023-08-01 07:51:21', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_data`
--

CREATE TABLE `user_data` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `avatar` text NOT NULL,
  `phonenumber` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user_data`
--

INSERT INTO `user_data` (`user_id`, `username`, `email`, `password`, `created_at`, `avatar`, `phonenumber`) VALUES
(1, 'Thăng Long', 'thanglong2908@gmail.com', '1', '2023-08-01 07:52:19', 'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/anh-anime-chibi.jpg?ssl=1', '1'),
(2, 'user2', 'user2@example.com', 'password2', '2023-08-01 07:52:19', 'https://symbols.vn/wp-content/uploads/2021/12/Tuyen-tap-Hinh-Anime-Nam-cool-ngau-lanh-lung.jpg', '0'),
(3, 'user3', 'user3@example.com', 'password3', '2023-08-01 07:52:19', 'https://pgddttieucan.edu.vn/wp-content/uploads/2022/08/hinh-anh-dong-don-gian-Hinh-anh-dong-don-gian.png', '0');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `comment_data`
--
ALTER TABLE `comment_data`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `like_data`
--
ALTER TABLE `like_data`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `posts_data`
--
ALTER TABLE `posts_data`
  ADD PRIMARY KEY (`post_id`);

--
-- Chỉ mục cho bảng `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `comment_data`
--
ALTER TABLE `comment_data`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `like_data`
--
ALTER TABLE `like_data`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `posts_data`
--
ALTER TABLE `posts_data`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `user_data`
--
ALTER TABLE `user_data`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comment_data`
--
ALTER TABLE `comment_data`
  ADD CONSTRAINT `comment_data_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts_data` (`post_id`),
  ADD CONSTRAINT `comment_data_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`user_id`);

--
-- Các ràng buộc cho bảng `like_data`
--
ALTER TABLE `like_data`
  ADD CONSTRAINT `like_data_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts_data` (`post_id`),
  ADD CONSTRAINT `like_data_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
