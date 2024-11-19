import { CgMore } from "react-icons/cg";
import "./Profile.css";

/* eslint-disable react/prop-types */
const Profile = ({ avatar, name, nickname }) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <img className="profile__avatar" src={avatar} alt="" />
        <div className="profile__names">
          <h2 className="profile__name">{name}</h2>
          <h2 className="profile__nickname">{nickname}</h2>
        </div>
      </div>
      <CgMore />
    </div>
  );
};

export { Profile };
