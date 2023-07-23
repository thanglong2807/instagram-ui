import React from "react";
import Style from "./Style";
import avatar from "../../assets/images/Profile-Pic-S.png";
const Follow = () => {
  return (
    <Style>
      <img className="avatar" src={avatar} alt="" />
      <div className="info">
        <h4 className="name">terylucas</h4>
        <p className="Followed">Followed by terylucas + 2 more</p>
      </div>
      <button className="active">follow</button>
    </Style>
  );
};

export default Follow;
