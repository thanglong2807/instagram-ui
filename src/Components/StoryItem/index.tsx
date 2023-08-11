import React, { FC } from "react";
import Style from "./style";
import avatarCircle from "../../assets/svg/avatarCircle.svg";
import avatar from "../../assets/images/Profile-Pic-S.png";

interface StoryType {
  titleStory?: string;
  titleName?: string;
  cirker?: boolean;
  avatarUser?: string;
}

const StoryItem: FC<StoryType> = ({
  titleStory,
  titleName,
  cirker,
  avatarUser,
}) => {
  return (
    <Style>
      <div className="avatar-profile-pic">
        <div className="pic">
          {cirker ? null : (
            <img className="avatar-circle" src={avatarCircle} alt="" />
          )}
          <img
            className="profile-pic"
            src={avatarUser ? avatarUser : avatar}
            alt=""
          />
        </div>
        {titleStory ? <h4 className="name_history">{titleStory}</h4> : null}
      </div>
      {titleName ? <h3>{titleName}</h3> : null}
    </Style>
  );
};

export default StoryItem;
