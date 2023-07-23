import styled from "styled-components";

const Style = styled.div`
  padding: 0px 3px;
  .pic {
    display: inline-block;
    padding: 0px 4px;
    align-items: flex-start;
    gap: 10px;
    position: relative;
  }
  .profile-pic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -54%);
  }
`;

export default Style;
