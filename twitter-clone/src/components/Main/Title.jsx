import { BsStars } from "react-icons/bs";

/* eslint-disable react/prop-types */
const Title = ({ children }) => {
  return (
    <div
      className="title"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        borderBottom: "1px solid #2f3336",
      }}
    >
      <h1 style={{ fontSize: "28px" }}>{children}</h1>
      <BsStars style={{ fontSize: "24px" }} />
    </div>
  );
};

export { Title };
