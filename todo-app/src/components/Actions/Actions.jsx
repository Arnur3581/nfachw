/* eslint-disable react/prop-types */
import { Button } from "../ui/Button/Button";
import { Modal } from "../ui/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { useTodos } from "../../hooks/useTodos";
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import "./Actions.css";

const Actions = ({ setType }) => {
  const [content, setContent] = useState("");
  const [activeButton, setActiveButton] = useState("active");
  const [mode, toggle] = useModal(false);
  const { addTodo } = useTodos();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddTodo = () => {
    if (content.trim() === "") {
      alert("Название тудушки не должно быть пустым");
      return;
    }

    addTodo(content);
    setContent("");
  };

  const handleActiveButton = (type) => {
    setType(type);
    setActiveButton(type);
  };

  return (
    <div className="actions">
      <div className="actions__selects">
        <Button
          onClick={() => handleActiveButton("active")}
          color={activeButton === "active" ? "gray" : "default"}
        >
          To Do
        </Button>
        <Button
          onClick={() => handleActiveButton("done")}
          color={activeButton === "done" ? "gray" : "default"}
        >
          Done
        </Button>
        <Button
          onClick={() => handleActiveButton("trash")}
          color={activeButton === "trash" ? "gray" : "default"}
        >
          Trash
        </Button>
      </div>
      <div className="actions__add-button">
        <Button
          color="blue"
          rounded="circle"
          onClick={toggle}
          styles={{ fontSize: "1.5rem" }}
        >
          <IoAddOutline />
        </Button>
        <Modal className="actions__modal" mode={mode}>
          <h3 className="actions__modal-title">Add New To Do</h3>
          <textarea
            className="actions__modal-input"
            type="text"
            value={content}
            placeholder="Your text"
            onChange={handleChange}
          ></textarea>
          <Button
            onClick={handleAddTodo}
            styles={{ clipPath: "none", fontWeight: 700 }}
            color="blue"
          >
            Add
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export { Actions };
