import styled from "styled-components";

const Style = styled.div`
  .message_profile {
    display: flex;
    width: 350px;
    padding: 8px 20px;
    align-items: center;
    color: #8e8e8e;
    gap: 12px;
  }
  .avatar {
    width: 56px;
    height: 56px;
    border-radius: 56px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .name {
    color: var(--black, #262626);
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 11px; /* 78.571% */
    text-transform: lowercase;
  }
  .active {
    color: var(--gray, #8e8e8e);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 11px; /* 78.571% */
  }
`;

export default Style;
