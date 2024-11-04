import { Article } from "./Article";

/* eslint-disable react/prop-types */
const ArticleList = ({ articles }) => {
  const articlesList = articles.map((article) => (
    <Article key={article.id} article={article} />
  ));

  return (
    <div className="container">
      <ul className="articles">{articlesList}</ul>
    </div>
  );
};

export { ArticleList };
