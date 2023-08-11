import styled from "styled-components";

const Styles = styled.div`
  margin-top: 22px;
  .profile_wrapper {
    padding: 0 71px;
  }
  .header {
    display: flex;
    gap: 101px;
    .img_profile {
      width: 150px;
      height: 150px;
      border-radius: 150px;
    }
  }
  .info {
    padding: 0 14px;
  }
  .desc {
    padding: 14px 0px;

    .desc_top {
      display: flex;
      align-items: center;
      gap: 20px;
      .top--name {
        color: var(--black, #262626);
        font-family: Segoe UI;
        font-size: 28px;
        font-style: normal;
        font-weight: 450;
        line-height: 32px; /* 114.286% */
      }
      .top--btn {
        border-radius: 4px;
        background: var(--blue, #0095f6);
        color: var(--white, #fff);
        font-family: Segoe UI;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; /* 128.571% */
        padding: 6px 24px;
      }
      .top--icon {
        width: 24px;
        height: 24px;
      }
    }
  }
  .tag {
    padding: 14px 0px;

    display: flex;
    align-items: center;
    gap: 40px;
  }
  .profile-name {
    h4 {
      color: var(--black, #262626);
      font-family: Segoe UI;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 150% */
    }
  }
  .storys {
    padding: 58px 0px 44px;
    display: flex;
    align-items: center;
    gap: 46px;
  }
  .toggle {
    padding: 17px 0;
    border-top: 1px solid rgba(219, 219, 219, 1);
    display: flex;
    justify-content: center;
    gap: 60px;
    .btn-toggle {
      display: flex;
      gap: 5px;
      align-items: center;
    }
    .active {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: -18px;
        width: 47px;
        height: 1px;
        background-color: rgba(38, 38, 38, 1);
      }
    }
  }
  .my_post {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    .my_post_img {
      width: calc((100% - (28px * 3)) / 4);
      cursor: pointer;
      img {
        width: 100%;
        aspect-ratio: 1/1;
      }
    }
  }
`;

export default Styles;
