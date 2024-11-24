import { useState } from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { tweetsData } from "./TweetsList/data";
import { PROFILE_IMG_PATH } from "./images";

const Home = ({ search }) => {
  const [tweets, setTweets] = useState(tweetsData);
  const [content, setContent] = useState("");

  const addTweet = () => {
    const newTweet = {
      id: tweets.length,
      authorName: "Aruzhan",
      authorUsername: "@azhaubassar",
      img: PROFILE_IMG_PATH,
      content: content,
      replies: 0,
      retweets: 0,
      likes: 0,
      topic: "blabla",
    };

    setTweets([...tweets, newTweet]);
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const filteredTweets = search
    ? tweets.filter((tweet) =>
        tweet.content.toLowerCase().includes(search.toLowerCase())
      )
    : tweets;

  return (
    <div className="w-50 mt-3">
      <h5 className="mx-3">Home</h5>
      <NewTweet
        content={content}
        onChangeTextInput={handleChange}
        onTweet={addTweet}
      />
      <TweetsList tweets={filteredTweets} deleteTweet={deleteTweet} />
    </div>
  );
};

export default Home;
