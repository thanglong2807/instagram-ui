import React from "react";
import Styles from "./style";
import Header from "../../Layout/Header";
import NewMessenger from "../../assets/svg/messages/NewMessages.svg";
import SharePosts from "../../assets/svg/messages/SharePosts.svg";
import MessageProfile from "../../Components/MessageProfile";
import Button from "../../Components/Button";
const Messenger = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Styles>
          <div className="left">
            <div className="header">
              <select>
                <option value="">shirleyromero</option>
                <option value="">shirleyromero</option>
                <option value="">shirleyromero</option>
              </select>
              <img src={NewMessenger} alt="" />
            </div>
            <div className="bottom">
              <MessageProfile />
              <MessageProfile />
              <MessageProfile />
              <MessageProfile />
            </div>
          </div>
          <div className="right">
            <div className="no_messeage">
              <div className="ciker">
                <img src={SharePosts} alt="" />
              </div>
              <h3>Your Messages</h3>
              <p>Send private photos and messages to a friend or group.</p>
              <Button className="btn" title="Send Message" />
            </div>
          </div>
        </Styles>
      </div>
    </React.Fragment>
  );
};

export default Messenger;
