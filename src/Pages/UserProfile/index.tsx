import React from "react";
import Header from "../../Layout/Header";
import Styles from "./style";
import Button from "../../Components/Button";
import More from "../../assets/svg/More.svg";
import Avatar from "../../assets/images/1.png";
import StoryItem from "../../Components/StoryItem";
import Posts from "../../assets/svg/user-profile/Posts.svg";
import Guides from "../../assets/svg/user-profile/Guides.svg";
import Reels from "../../assets/svg/user-profile/Reels.svg";
import Tagged from "../../assets/svg/user-profile/Tagged.svg";
import Videos from "../../assets/svg/user-profile/Videos-2.svg";
import Post1 from "../../assets/images/User-Profile/Small-Post(1).png";
import Post2 from "../../assets/images/User-Profile/Small-Post.png";
import Post3 from "../../assets/images/User-Profile/Small-Post(2).png";
const UserProfile = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Styles>
          <div className="profile_wrapper">
            <div className="header">
              <div>
                <img src={Avatar} alt="" className="img_profile" />
              </div>
              <div className="info">
                <div className="desc">
                  <div className="desc_top">
                    <h3 className="top--name">terrylucas</h3>
                    <Button className="top--btn" title="Follow" />
                    <img className="top--icon" src={More} alt="" />
                  </div>
                </div>
                <div className="tag">
                  <span>
                    <b>1.258</b> posts
                  </span>
                  <span>
                    <b>4M</b> followers
                  </span>
                  <span>
                    <b>1.250</b> following
                  </span>
                </div>
                <div className="profile-name">
                  <h4>Terry Lucas</h4>
                </div>
              </div>
            </div>
            <div className="storys">
              <StoryItem cirker={true} titleStory="Thăng Long" />
              <StoryItem cirker={true} titleStory="Thăng Long" />
              <StoryItem cirker={true} titleStory="Thăng Long" />
              <StoryItem cirker={true} titleStory="Thăng Long" />
              <StoryItem cirker={true} titleStory="Thăng Long" />
              <StoryItem cirker={true} titleStory="Thăng Long" />
              <StoryItem cirker={true} titleStory="Thăng Long" />
              <StoryItem cirker={true} titleStory="Thăng Long" />
            </div>
          </div>
          <div className="toggle">
            <Button
              className="btn-toggle active"
              leftIcon={Posts}
              title="POSTS"
            />
            <Button className="btn-toggle" leftIcon={Guides} title="guıdes" />
            <Button className="btn-toggle" leftIcon={Reels} title="reels" />
            <Button className="btn-toggle" leftIcon={Videos} title="vıdeos" />
            <Button className="btn-toggle" leftIcon={Tagged} title="tagged" />
          </div>
          <div className="my_post">
            <div className="my_post_img">
              <img src={Post1} alt="" />
            </div>
            <div className="my_post_img">
              <img src={Post2} alt="" />
            </div>
            <div className="my_post_img">
              <img src={Post1} alt="" />
            </div>
            <div className="my_post_img">
              <img src={Post3} alt="" />
            </div>
            <div className="my_post_img">
              <img src={Post1} alt="" />
            </div>
            <div className="my_post_img">
              <img src={Post2} alt="" />
            </div>
          </div>
        </Styles>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
