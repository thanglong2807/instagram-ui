import React from "react";
import Style from "./style";
import Logo from "../../assets/images/Logo (1).png";
import Search from "../../assets/svg/Search.svg";
import HomeFill from "../../assets/svg/header/Home-fill.svg";
import FindPeople from "../../assets/svg/header/FindPeople.svg";
import ActivityFeed from "../../assets/svg/header/ActivityFeed.svg";
import Messenger from "../../assets/svg/header/Messenger.svg";
import NewPosts from "../../assets/svg/header/NewPosts.svg";
import avatar from "../../assets/svg/header/Profile-Pic-S.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../Components/Button";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../redux/action";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataInfo = useSelector((state: any) => state.dataLogin);
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(checkLogin(false));
    navigate("/");
  };
  return (
    <Style>
      <div className="container">
        <div className="header_content">
          <h1>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img src={Logo} alt="" />
            </Link>
          </h1>
          <div className="search">
            <img className="btn_search" src={Search} alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="menu_button">
            <Link to="/">
              <img className="menu_button_item" src={HomeFill} alt="" />
            </Link>
            <Link to="/messenger">
              <img className="menu_button_item" src={Messenger} alt="" />
            </Link>
            <Link to="">
              <img className="menu_button_item" src={NewPosts} alt="" />
            </Link>
            <Link to="">
              <img className="menu_button_item" src={FindPeople} alt="" />
            </Link>
            <Link to="">
              <img className="menu_button_item" src={ActivityFeed} alt="" />
            </Link>
            <Link to="/my-profile">
              <img
                className="menu_button_item avatar"
                src={dataInfo.avatar ? dataInfo.avatar : avatar}
                alt=""
              />
            </Link>
            <Button title="đăng xuất" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </Style>
  );
};

export default Header;
