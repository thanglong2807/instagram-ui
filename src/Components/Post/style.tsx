import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 614px;
  border: 1px solid #dbdbdb;

  .header {
    padding: 9px 16px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  .img_post {
    width: 614px;
    height: 614px;
    flex-shrink: 0;
  }
  .bottom {
    background: #fff;
    padding: 0 16px;
  }
  .icon_right {
    display: flex;
    gap: 16px;
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0 8px;
  }
  .likes {
    color: var(--black, #262626);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 128.571% */
    text-transform: lowercase;
  }
  .commnets {
    display: flex;
    gap: 4px;
    flex-direction: column;
    align-items: flex-start;
  }
  .user-name {
    color: var(--black, #262626);
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 128.571% */
  }
  .comment-wrapper,
  .user__comment {
    display: flex;
    gap: 7px;
  }
  .header-commnet {
    width: 100%;
  }
  .user-comment {
    color: var(--black, #262626);
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 452px;
  }
  .more {
    color: var(--gray, #8e8e8e);
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
  .user-view {
    color: var(--gray, #8e8e8e);
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
  }
  .time {
    color: var(--gray, #8e8e8e);
    font-family: Segoe UI;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 180% */
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }

  .add_comment {
    display: flex;
    align-items: center;

    input {
      flex: 1;
      padding: 11px 16px;
    }
  }
  .big-post {
    width: 576px;
  }
  .smal-post {
    width: 292px;
  }
`;
export default Style;
