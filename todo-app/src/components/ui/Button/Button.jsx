import "./Button.css";

/* eslint-disable react/prop-types */
const Button = ({ color, rounded, styles, onClick, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button button-${color} button-${rounded}`}
      onClick={handleClick}
      style={styles}
    >
      {children}
    </button>
  );
};

export { Button };
