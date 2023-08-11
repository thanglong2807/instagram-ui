import { styled } from "styled-components";

const Style = styled.div`
  padding: 20px 0 0;

  .main {
    display: flex;
    justify-content: center;
    gap: 28px;
  }
  .story {
    display: flex;
    align-items: center;
    max-width: 614px;
    overflow: hidden;
    background-color: #fff;
    padding: 17px 0px;
    position: relative;
    border: 1px solid #dbdbdb;
    .btn_next {
      position: absolute;
      top: 50%;
      right: -5px;
      transform: translate(-50%, -50%);
      background-color: #f2f3f4;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .list_post {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .secondary {
    max-width: 293px;
  }
  .see_all {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      color: var(--gray, #8e8e8e);
      font-feature-settings: "clig" off, "liga" off;
      font-family: Segoe UI;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 128.571% */
      text-transform: capitalize;
    }
    span {
      color: var(--black, #262626);
      font-feature-settings: "clig" off, "liga" off;
      font-family: Segoe UI;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px; /* 133.333% */
      text-transform: capitalize;
    }
  }
  .list--follow {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0;
  }
  .home_footer {
    color: var(--footer-color, #c7c7c7);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Segoe UI;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px; /* 118.182% */
    text-transform: capitalize;
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }
`;

export default Style;
