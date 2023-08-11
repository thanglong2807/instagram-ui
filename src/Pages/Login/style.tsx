import { styled } from "styled-components";

const Style = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  .login_content {
    display: flex;
    align-items: center;
    gap: 84px;
  }
  .background {
    flex: 1;
    img {
      aspect-ratio: 621.702/ 587.348;
      width: 100%;
      fill: #fff;
      filter: drop-shadow(
        0px 21.00374412536621px 31.505615234375px rgba(147, 153, 176, 0.15)
      );
    }
  }
  .form_login-container {
    max-width: 373px;
    flex: 1;
    padding: 30px;
    border: 1px solid #c4c4c4c4;
    fill: #fff;
    filter: drop-shadow(
      0px 21.00374412536621px 31.505615234375px rgba(147, 153, 176, 0.15)
    );
  }
  .form_login {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12.6px;
    h2 {
      text-align: center;
      margin-bottom: 32px;
    }
    input {
      border-radius: 6.301px;
      background: #c4c4c449;
      font-family: Nexa;
      font-size: 12.602px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding: 15px;
      color: #919090;

      &::placeholder {
        color: rgba(196, 196, 196, 1);
      }
    }
    .btn_login {
      padding: 15px;
      border-radius: 6.301px;
      background: linear-gradient(
        245deg,
        #a336bd 0%,
        #ff387d 30.69%,
        #ff5d34 68.37%,
        #ffaa1b 100%
      );
      color: #fff;
      font-family: Nexa;
      font-size: 14.703px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      text-transform: uppercase;
    }
    .or {
      margin: 21px 0;
      color: #5a686c;
      font-family: Nexa;
      font-size: 11.552px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      position: relative;
      text-align: center;
      z-index: 1;
      span {
        background-color: #fff;
        width: 40px;
        position: relative;
        z-index: 1;
      }
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #ccc;
      }
    }
    .btn_login-fb {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
      padding: 9px 0;
      fill: #fff;
      filter: drop-shadow(
        0px 21.00374412536621px 31.505615234375px rgba(147, 153, 176, 0.15)
      );
      border-radius: 6.301px;
      border: 1.05px solid #1877f2;
      color: #1877f2;
      font-family: Nexa;
      font-size: 12.602px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .btn_login-forgot {
      color: #5a686c;
      font-family: Nexa;
      font-size: 12.602px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 20px 0 39px;
    }

    .sign_up {
      color: #1877f2;
      font-family: Nexa;
      font-size: 12.602px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
    }
  }
`;

export default Style;
