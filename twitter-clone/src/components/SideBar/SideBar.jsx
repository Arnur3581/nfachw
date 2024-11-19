import { Button } from "../Button/Button";
import { Logo } from "./Logo";
import { Menu } from "../Menu/Menu";
import { Profile } from "../Profile/Profile";
import Dog from "../../assets/images/dog.png";
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside className="side-bar">
      <div className="side-bar__container">
        <div className="side-bar__top">
          <Logo />
          <Menu />
          <Button
            settings={{
              size: "big",
              color: "primary",
            }}
          >
            Post
          </Button>
        </div>
        <Profile avatar={Dog} name="Anna-Maria Goethe" nickname="@annemar" />
      </div>
    </aside>
  );
};

export { SideBar };
