import styled from "styled-components";

const Styles = styled.div`
  margin-top: 22px;
  display: flex;
  .left {
    flex: 37;
    border: 1px solid rgba(219, 219, 219, 1);
    min-height: 100vh;
  }
  .right {
    flex: 73;
  }
  .header {
    padding: 12px 32px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(219, 219, 219, 1);
    justify-content: center;
    select {
      color: var(--black, #262626);
      font-family: Segoe UI;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 150% */
      text-transform: lowercase;
      margin: 6px 46px;
      outline: none;
      border: none;
    }
    img {
    }
  }

  .no_messeage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    gap: 16px;
    .ciker {
      border: 2px solid #000;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn {
      border-radius: 4px;
      background: var(--blue, #0095f6);
      padding: 6px 9px;
      color: #fff;
      font-family: Segoe UI;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 128.571% */
    }
  }
`;

export default Styles;
