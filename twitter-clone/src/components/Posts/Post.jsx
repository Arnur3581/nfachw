import { BsBoxArrowUp } from "react-icons/bs";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import "./Post.css";

/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  const { author, time, text, actions } = post;
  return (
    <div className="post">
      <img className="post__image" src={author.avatar} alt="" />
      <div className="post__content">
        <div className="post__author">
          <h3>
            {author.name}{" "}
            <span>
              {author.nickname} . {time}
            </span>
          </h3>
        </div>
        <div className="post__text">
          <p>{text}</p>
        </div>
        <div className="post__actions">
          <span>
            <FaRegComment /> {actions.comments}
          </span>
          <span>
            <FaRetweet /> {actions.retweets}
          </span>
          <span>
            <FaRegHeart /> {actions.likes}
          </span>
          <BsBoxArrowUp />
        </div>
      </div>
    </div>
  );
};

export { Post };
