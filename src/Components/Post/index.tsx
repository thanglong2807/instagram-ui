import React, { FC, useState } from "react";
import Style from "./style";
import iconMore from "../../assets/svg/More.svg";
import StoryItem from "../StoryItem";
import post from "../../assets/images/1.png";
import Like from "../../assets/svg/Lİke.svg";
import LikeActive from "../../assets/svg/Like_active.png";
import SharePosts from "../../assets/svg/SharePosts.svg";
import Comment from "../../assets/svg/Comment.svg";
import Save from "../../assets/svg/Save.svg";
import Emoji from "../../assets/svg/Emoji.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import CommentBox from "../CommentBox";

interface PostType {
  titleName?: string;
  post_id?: number;
  username?: string;
  title?: string;
  content?: string;
  created_at?: string;
  user_id?: string;
  post_owner_username?: string;
  post_owner_email?: string;
  post_owner_avatar?: string;
  liked_by_user_count?: number;
  commented_by_user_ids?: string;
  comments?: string;
  commenter_usernames?: string;
  commenter_emails?: string;
  commenter_avatars?: string;
}
const Post: FC<PostType> = ({
  post_id,
  title,
  post_owner_username,
  post_owner_avatar,
  liked_by_user_count,
  comments,
}) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(liked_by_user_count);
  const [valueComment, setValueComment] = useState("");
  const info = useSelector((state: any) => state.dataLogin);
  const [activeComment, setactiveCommnet] = useState(false);
  const [dataComment, setDataComment] = useState([]);
  const handleLikePosts = async () => {
    try {
      const data = {
        post_id: 1,
        user_id: 1,
      };
      const response = await axios.post(
        "http://localhost/my-vue-app/server/databases/like.php",
        data
      );

      console.log({
        post_id: post_id,
        user_id: info.user_id,
      });

      setLike(!like);
      setLikeCount(response.data.like_count);
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };
  const handleComment = async (e: any) => {
    if (e.keyCode === 13) {
      try {
        console.log("gửi");
        const dataComment = {
          post_id: post_id,
          user_id: info.user_id,
          comments: valueComment,
        };
        const response = await axios.post(
          "http://localhost/my-vue-app/server/databases/postcomment.php",
          dataComment
        );

        // Xử lý kết quả tại đây nếu cần
        console.log("Kết quả từ server:", response.data);
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Lỗi khi gửi yêu cầu:", error);
      }
    }
  };
  const handleShowComment = async (id: number) => {
    try {
      axios
        .post(
          "http://localhost/my-vue-app/server/databases/get_data_comment.php",
          {
            id,
          }
        )
        .then((res) => {
          setactiveCommnet(true);
          setDataComment(res.data);
          console.log(res.data);
        });
    } catch (error) {
      console.log(`Lỗi ở phần handleShowComment: ${error}`);
    }
  };

  return (
    <Style>
      <div className="header">
        <StoryItem
          titleName={post_owner_username}
          avatarUser={post_owner_avatar}
        />
        <button>
          <img src={iconMore} alt="" />
        </button>
      </div>
      <img className="img_post" src={title ? title : post} alt="" />
      <div className="bottom">
        <div className="icons">
          <div className="icon_right">
            {like ? (
              <img
                className="cursor"
                onClick={handleLikePosts}
                src={LikeActive}
                alt=""
              />
            ) : (
              <img
                className="cursor"
                onClick={handleLikePosts}
                src={Like}
                alt=""
              />
            )}
            <img className="cursor" src={SharePosts} alt="" />
            <img
              className="cursor"
              src={Comment}
              alt=""
              onClick={() => handleShowComment(post_id)}
            />
            {activeComment ? (
              <CommentBox
                imgPost={title}
                titleName={post_owner_username}
                avatarUser={post_owner_avatar}
                activeLike={like}
                dataComent={dataComment}
              />
            ) : null}
          </div>
          <div className="icon_left">
            <img src={Save} alt="" />
          </div>
        </div>
        <div className="likes">
          <span> {likeCount} Likes</span>
        </div>
        <div className="commnets">
          <div className="header-commnet">
            <div className="user__comment">
              <span className="user-name">{post_owner_username} </span>
              <div className="comment-wrapper">
                <p className="user-comment">{comments}</p>
                <span className="more">more</span>
              </div>
            </div>
          </div>
          <span className="user-view">View all 100 comments</span>
          <p className="time">
            <span>1</span> hour ago
          </p>
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
    </Style>
  );
};

export default Post;
