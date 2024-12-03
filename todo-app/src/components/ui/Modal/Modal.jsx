/* eslint-disable react/prop-types */
import "./Modal.css";

const Modal = ({ mode, className = "", children }) => {
  // const ref = useRef(null);
  // const [attached, setAttached] = useState(false);

  // useEffect(() => {
  //   setAttached((prev) => !prev);
  // }, [mode]);

  // useOutsideClick(ref, toggle, attached);
  if (!mode) return;

  return (
    <div className={`modal ${className}`} style={{ position: "absolute" }}>
      {children}
    </div>
  );
};

export { Modal };
