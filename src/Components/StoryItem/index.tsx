import React, { FC } from "react";
import Style from "./style";
import avatarCircle from "../../assets/svg/avatarCircle.svg";
import avatar from "../../assets/images/Profile-Pic-S.png";

interface StoryType {
  titleStory?: string;
}

const StoryItem: FC<StoryType> = ({ titleStory }) => {
  return (
    <Style>
      <div className="avatar-profile-pic">
        <div className="pic">
          <img className="avatar-circle" src={avatarCircle} alt="" />
          <img className="profile-pic" src={avatar} alt="" />
        </div>
        {titleStory ? <h4 className="avatar-name">{titleStory}</h4> : null}
      </div>
    </Style>
  );
};

export default StoryItem;
