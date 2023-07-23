import React from "react";
import Style from "./style";
import iconMore from "../../assets/svg/More.svg";
import StoryItem from "../StoryItem";
import post from "../../assets/images/1.png";
const Post = () => {
  return (
    <Style>
      <div className="header">
        <StoryItem />
        <button>
          <img src={iconMore} alt="" />
        </button>
      </div>
    </Style>
  );
};

export default Post;
