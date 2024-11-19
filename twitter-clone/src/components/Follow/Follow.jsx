import { Button } from "../Button/Button";
import "./Follow.css";

const Follow = () => {
  return (
    <div className="follow">
      <h2>Who to follow</h2>
      <div className="follow__accounts">
        <div className="follow__account">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/640px-CNN_International_logo.svg.png" />
          <div className="follow__content">
            <h2>CNN</h2>
            <span>@CNN</span>
          </div>
        </div>
        <div className="follow__account">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/640px-CNN_International_logo.svg.png" />
          <div className="follow__content">
            <h2>CNN</h2>
            <span>@CNN</span>
          </div>
        </div>
      </div>
      <a href="/" className="follow__link">
        Show more
      </a>
    </div>
  );
};

export { Follow };
