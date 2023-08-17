import React, { FC } from "react";
import Style from "./style";
import More from "../../assets/svg/More.svg";
interface typeCommentBox {
  imgPost?: string;
  titleName?: string;
  activeLike?: boolean;
  avatarUser?: string;
  dataComent?: any;
}
const CommentBox: FC<typeCommentBox> = ({
  imgPost,
  activeLike,
  titleName,
  avatarUser,
  dataComent,
}) => {
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
              <h3 className="usename">{titleName}</h3>
            </div>
            <button>
              <img src={More} alt="" />
            </button>
          </div>
          <div className="list_comments">
            {dataComent.map((item: any) => (
              <div className="list_comment" key={item.comment_id}>
                <img className="avatar" src={item.avatar} alt="" />{" "}
                <div className="comments">
                  <h4 className="usename">{item.username}</h4>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="action_comment">
            
          </div>
        </div>
      </div>
    </Style>
  );
};

export default CommentBox;
