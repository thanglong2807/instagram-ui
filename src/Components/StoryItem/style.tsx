import styled from "styled-components";

const Style = styled.div`
  padding: 0px 3px;
  display: flex;
  align-items: center;
  gap: 14px;

  .pic {
    display: inline-block;
    padding: 0px 4px;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    min-width: 67px;
    min-height: 67px;
  }
  .profile-pic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -54%);
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
  .name_history {
    color: var(--black, #262626);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Segoe UI;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.12px;
    text-transform: lowercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px;
  }
`;

export default Style;
