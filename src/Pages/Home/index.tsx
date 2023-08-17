import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Style from "./style";
import Post from "../../Components/Post";
import StoryItem from "../../Components/StoryItem";
import Follow from "../../Components/Follow";
import btnRight from "../../assets/svg/Home/Icons/Arrow.svg";
import axios from "axios";
interface PostData {
  post_id: number;
  username: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
  post_owner_username: string;
  post_owner_email: string;
  post_owner_avatar: string;
  liked_by_user_count: number;
  commented_by_user_ids: string;
  comments: string;
  commenter_usernames: string;
  commenter_emails: string;
  commenter_avatars: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<PostData[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost/my-vue-app/server/databases/get_data.php"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Style>
        <section className="main">
          <div className="list_post">
            <div className="story">
              <StoryItem titleStory="Thăng Long" />

              <div className="btn_next">
                <img src={btnRight} alt="" />
              </div>
            </div>
            {data.map((item: any) => (
              <Post
                key={item.post_id}
                titleName={item.username}
                post_owner_username={item.post_owner_username}
                liked_by_user_count={item.liked_by_user_count}
                title={item.title}
                post_owner_avatar={item.post_owner_avatar}
                comments={item.comments}
                post_id={item.post_id}
              />
            ))}
          </div>
          <div className="secondary">
            <Follow name="Thăng Long" active="Follow" size="big" />
            <div className="see_all">
              <h4>Suggestions For You</h4>
              <span>See All</span>
            </div>
            <div className="list--follow">
              <Follow name="Thăng Long" active="Follow" />
            </div>
            <div className="home_footer">
              <span>About</span>
              <span>Press</span>
              <span>API</span>
              <span>Jobs</span>
              <span>Privacy</span>
              <span>Terms</span>
              <span>Locations</span>
              <span>Top Accounts</span>
              <span>Hashtags</span>
              <span>Language</span>
            </div>
          </div>
        </section>
      </Style>
    </React.Fragment>
  );
};

export default Home;
