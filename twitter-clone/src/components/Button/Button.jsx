import "./Button.css";

/* eslint-disable react/prop-types */
const Button = ({ settings = {}, children }) => {
  const {
    size = "small",
    color = "default",
    type = "button",
    disabled = false,
  } = settings;

  return (
    <button
      className={`button button-${color} button-${size}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
