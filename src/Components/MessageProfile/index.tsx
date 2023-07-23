import React from "react";
import Style from "./style";
import avatar from "../../assets/images/Profile-Pic-S.png";
const MessageProfile = () => {
  return (
    <Style>
      <div className="message_profile">
        <img className="avatar" src={avatar} alt="" />
        <div className="info">
          <h4 className="name">trerrylucas</h4>
          <p className="active">Active 1h ago</p>
        </div>
      </div>
    </Style>
  );
};

export default MessageProfile;
