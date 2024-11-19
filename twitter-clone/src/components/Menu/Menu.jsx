import { MenuItem } from "./MenuItem";
import { menuItems } from "./menuItems";
import "./Menu.css";

const Menu = () => {
  return (
    <menu className="menu">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </menu>
  );
};

export { Menu };
