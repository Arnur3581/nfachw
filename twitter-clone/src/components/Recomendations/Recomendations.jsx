/* eslint-disable react/prop-types */
import { IoIosMore } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { recomendations } from "../../data";
import "./Recomendations.css";

const Recomendation = ({ rec }) => {
  return (
    <div className="recomendation">
      <div>
        <span>Trending in {rec.country}</span>
        <h3>{rec.topic}</h3>
        <span>{rec.posts} posts</span>
      </div>
      <IoIosMore />
    </div>
  );
};

const Recomendations = () => {
  return (
    <div className="recomendations">
      <div className="recomendations__header">
        <h2 className="recomendations__title">Trends for you</h2>
        <IoSettingsOutline />
      </div>
      <div className="recomendations__content">
        {recomendations.map((rec, index) => (
          <Recomendation key={index} rec={rec} />
        ))}
      </div>
      <a href="/" className="recomendations__link">
        Show more
      </a>
    </div>
  );
};

export { Recomendations };
