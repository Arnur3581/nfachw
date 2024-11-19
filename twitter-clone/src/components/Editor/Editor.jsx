import { BiPoll } from "react-icons/bi";
import { MdOutlineGifBox } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { Button } from "../Button/Button";
import "./Editor.css";

/* eslint-disable react/prop-types */
const Editor = ({ avatar }) => {
  return (
    <div className="editor">
      <img className="editor__avatar" src={avatar} alt="" />
      <div className="editor__right">
        <input className="editor__input" placeholder="What's happening?" />
        <div className="editor__actions">
          <div>
            <SlPicture />
            <MdOutlineGifBox />
            <BiPoll />
          </div>
          <Button
            settings={{
              color: "primary",
              disabled: true,
            }}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Editor };
