import { TagsList } from "../Tags/TagsList";
import ActionsImage from "../../assets/images/Actions.png";
import "./Article.css";

/* eslint-disable react/prop-types */
const Article = ({ article }) => {
  const { author, topic, text, tags, image } = article;

  return (
    <>
      <div className="article">
        <div className="article__content">
          <div className="article__author">
            <img
              src={author.avatar}
              alt=""
              className="article__author-avatar"
            />
            <h3 className="article__author-name">{author.name} · 7 July</h3>
          </div>
          <h2 className="article__topic">{topic}</h2>
          <p className="article__text">{text}</p>
          <div className="article__extra-info">
            <div className="articl__meta">
              <TagsList tags={tags} /> 12 mins read · Selected for you
            </div>
            <img src={ActionsImage} alt="" className="article__actions" />
          </div>
        </div>
        <img src={image} alt="" className="article__image" />
      </div>
    </>
  );
};

export { Article };
