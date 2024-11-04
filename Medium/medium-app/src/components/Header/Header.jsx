import "./Header.css";

/* eslint-disable react/prop-types */
const Header = ({ name, logo }) => {
  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__title">{name}</h1>
        <h2 className="header__logo">{logo}</h2>
      </div>
    </header>
  );
};

export { Header };
