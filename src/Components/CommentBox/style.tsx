import styled from "styled-components";

const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0000004d;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .comment_content {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    width: calc(100vw / 1.2);
    height: calc(100vh / 1.2);
    display: flex;
  }
  .comment_left,
  .comment_right {
    flex: 1;
  }
  .comment_left {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .usename {
    color: rgb(38, 38, 38);
    cursor: pointer;
    background-color: transparent;
    font-weight: 600;
    pointer-events: auto;
    text-overflow: ellipsis;
    text-transform: inherit;
    font-size: 14px;
    &:hover {
      color: rgba(38, 38, 38, 0.481);
    }
  }

  .comment_right {
    padding: 10px 0;
    position: relative;
  }
  .info_comment {
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #cccccc60;
    align-items: center;
    justify-content: space-between;

    div {
      gap: 10px;
      display: flex;
      align-items: center;
    }
  }
  .avatar {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }
  .list_comment {
    display: flex;
    align-items: stretch;
    padding: 10px;
    gap: 10px;
    font-size: 14px;
    .comments {
      align-items: center;
      display: flex;
      gap: 10px;
    }
  }
`;
export default Style;
