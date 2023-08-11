import styled from "styled-components";

const Style = styled.div`
  display: flex;
  padding: 8px 0px;
  align-items: center;
  gap: 10px;

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 32px;
    cursor: pointer;
  }
  .info {
    cursor: pointer;
    display: flex;
    width: 198px;
    padding: 1px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    flex: 1;
  }
  .name {
    color: var(--black, #262626);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 11px; /* 78.571% */
    text-transform: lowercase;
  }
  .Followed {
    color: var(--gray, #8e8e8e);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Segoe UI;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 11px; /* 91.667% */
  }
  .active {
    color: var(--blue, #0095f6);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Segoe UI;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 11px; /* 91.667% */
    text-transform: capitalize;
    cursor: pointer;
  }
  .big_img {
    width: 56px;
    height: 56px;
  }
  .big_name {
    font-weight: 700;
  }
  .big_followed {
    font-size: 14px;
  }
`;

export default Style;
