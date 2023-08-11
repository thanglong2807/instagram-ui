import React, { FC } from "react";
import Style from "./Style";
import avatar from "../../assets/images/Profile-Pic-S.png";
interface FollowTpye {
  active?: string;
  size?: string;
  name: string;
  avatars?: string;
}
const Follow: FC<FollowTpye> = ({ active, size, name, avatars }) => {
  return (
    <Style>
      <img
        className={`avatar ${size ? "big_img" : ""} `}
        src={avatars ? avatars : avatar}
        alt=""
      />
      <div className="info">
        <h4 className={`name ${size ? "big_name" : ""}`}>{name}</h4>
        <p className={`Followed ${size ? "big_followed" : ""}`}>
          Followed by {name} + 2 more
        </p>
      </div>
      <button className="active">{active ? active : "follow"}</button>
    </Style>
  );
};

export default Follow;
