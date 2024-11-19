/* eslint-disable react/prop-types */
const MenuItem = ({ name, icon: Icon, link }) => {
  return (
    <div>
      <li className="menu__item">
        <a className="menu__link" href={link}>
          <Icon className="menu__icon" />
          <span className="menu__name">{name}</span>
        </a>
      </li>
    </div>
  );
};

export { MenuItem };
