import React, { ChangeEvent, useState, useEffect } from "react";
import Style from "./style";
import background from "../../assets/images/Login/1.png";
import instagram from "../../assets/images/Login/Union.svg";
import fb from "../../assets/images/Login/Subtract.svg";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { checkLogin, dataLogin } from "../../redux/action";
interface Login {
  username: string;
  password: string;
}
const Login: React.FC = () => {
  const [login, setLogin] = useState<Login>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = () => {
    const [username, password] = [login.username, login.password];
    axios
      .get("http://localhost/my-vue-app/server/databases/get_data_user.php")
      .then((res) => {
        const data = res.data;
        const checkLoginn = data.find(
          (item: any) =>
            item.email === username ||
            item.username === username ||
            item.phonenumber === username
        );
        if (!checkLoginn) {
          console.log("tài khoản không tồn tại");
        } else {
          if (checkLoginn.password !== password) {
            console.log("sai mật khẩu");
          } else {
            console.log("đăng nhập thành công");
            dispatch(dataLogin(checkLoginn));

            localStorage.setItem("token", JSON.stringify(checkLoginn));
            dispatch(checkLogin(true));
          }
        }
      });
  };
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      dispatch(dataLogin(getToken));
      dispatch(checkLogin(true));
    }
  }, []);

  return (
    <Style>
      <div className="container">
        <div className="login_content">
          <div className="background">
            <img src={background} alt="" />
          </div>
          <div className="form_login-container">
            <div className="form_login">
              <h2>
                <img src={instagram} alt="" />
              </h2>
              <input
                placeholder="Phone Number, Username, or Email"
                value={login.username}
                onChange={handleOnChange}
                type="text"
                name="username"
              />
              <input
                placeholder="Password"
                type="password"
                value={login.password}
                onChange={handleOnChange}
                name="password"
              />
              <Button
                onClick={handleSubmit}
                title="Login"
                className="btn_login"
              />
              <div className="or">
                <span>OR</span>
              </div>
              <Button
                title="Log in with Facebook"
                leftIcon={fb}
                className="btn_login-fb"
              />
              <Button title="Forgot Password?" className="btn_login-forgot" />
              <Link to="/" className="sign_up">
                Don’t have an account? Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default Login;
