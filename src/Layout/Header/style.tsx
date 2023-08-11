import { styled } from "styled-components";

const Style = styled.header`
  background-color: #fff;
  padding: 9px 0;
  border-bottom: 1px solid #dbdbdb;
  .header_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .search {
    display: flex;
    width: 215px;
    padding: 4px 72px 4px 71px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 1px solid var(--border-color, #dbdbdb);
    .btn_search {
      width: 14px;
      height: 14px;
    }
  }
  .menu_button {
    display: flex;
    gap: 22px;
    align-items: center;
    .menu_button_item {
      cursor: pointer;
    }
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export default Style;
