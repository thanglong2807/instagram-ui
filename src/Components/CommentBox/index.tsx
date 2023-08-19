import React, { FC, useState, useEffect } from "react";
import Style from "./style";
import More from "../../assets/svg/More.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { SERVER } from "../../ulint";
interface CommentBoxProps {
  post_id?: number;
  imgPost?: string;
  titleName?: string;
  activeLike?: boolean;
  avatarUser?: string;
  dataComment?: any;
  isLike?: any;
  handleLikePosts?: any;
  LikeActive?: any;
  Like?: any;
  SharePosts?: any;
  handleShowComment?: any;
  Save?: any;
  likeCount?: any;
  Emoji?: any;
  Comment?: any;
}

const CommentBox: FC<CommentBoxProps> = (props) => {
  const {
    imgPost,
    activeLike,
    titleName,
    avatarUser,
    dataComment,
    isLike,
    handleLikePosts,
    LikeActive,
    Like,
    SharePosts,
    handleShowComment,
    Save,
    likeCount,
    Emoji,
    post_id,
    Comment,
  } = props;
  const [valueComment, setValueComment] = useState("");
  const [dataComments, setDataComments] = useState<any[]>([]);
  const info = useSelector((state: any) => state.dataLogin);
  const [socket, setSocket] = useState<any>(null);

  const newSocket = io(SERVER);
  useEffect(() => {
    setSocket(newSocket);
    // Lắng nghe sự kiện "data-updated" từ server
    newSocket.on("commentsData", (updatedData) => {
      // Cập nhật trạng thái của ứng dụng với dữ liệu mới
      setDataComments([...dataComments, updatedData]);
      console.log(updatedData);
    });

    return () => {
      newSocket.off("new-comment"); // Loại bỏ lắng nghe khi component bị hủy
    };
  }, []);

  const handleComment = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!socket) {
      console.log("không có giá trị socket");
      return 0;
    }
    if (e.key === "Enter") {
      e.preventDefault();

      try {
        const dataComment = {
          post_id: post_id,
          user_id: info.user_id,
          comments: valueComment,
        };

        socket.emit("new-comment", dataComment);

        console.log("Data Comment Sent:", dataComment);

        setValueComment("");
      } catch (error) {
        console.error("Error sending the request:", error);
      }
    }
  };

  return (
    <Style>
      <div className="comment_content">
        <div className="comment_left">
          <img className="img_usename" src={imgPost} alt="" />
        </div>
        <div className="comment_right">
          <div className="info_comment">
            <div>
              <img className="avatar" src={avatarUser} alt="" />{" "}
              <h3 className="username">{titleName}</h3>
            </div>
            <button>
              <img src={More} alt="" />
            </button>
          </div>
          <div className="list_comments">
            {dataComment.map((comment: any) => (
              <div className="list_comment" key={comment.comment_id}>
                <img className="avatar" src={comment.avatar} alt="" />{" "}
                <div className="comments">
                  <h4 className="username">{comment.username}</h4>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="action_comment">
            <div className="icons">
              <div className="icon_right">
                <img
                  title="thích"
                  className="cursor"
                  onClick={handleLikePosts}
                  src={activeLike ? LikeActive : Like}
                  alt=""
                />
                <img
                  title="bình luận"
                  className="cursor"
                  src={Comment}
                  alt=""
                  onClick={() => post_id && handleShowComment(post_id)}
                />
                <img
                  className="cursor"
                  title="chia sẻ"
                  src={SharePosts}
                  alt=""
                />
              </div>
              <div className="icon_left">
                <img className="cursor" title="Lưu" src={Save} alt="" />
              </div>
            </div>
            <div className="likes">
              <h5 className="title_likes"> {likeCount} Likes</h5>
              <span className="time_like">18 GIỜ TRƯỚC</span>
            </div>

            <div className="add_comment">
              <button>
                <img src={Emoji} alt="" />
              </button>
              <input
                type="text"
                value={valueComment}
                onChange={(e) => setValueComment(e.target.value)}
                placeholder="Add a comment..."
                onKeyDown={handleComment}
              />
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default CommentBox;
