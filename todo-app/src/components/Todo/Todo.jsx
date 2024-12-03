import { Modal } from "../ui/Modal/Modal";
import { IoMdMore } from "react-icons/io";
import { MdLibraryAddCheck } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useModal } from "../../hooks/useModal";
import "./Todo.css";
import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";

/* eslint-disable react/prop-types */
const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(todo.checked);
  const [mode, toggle] = useModal(false);
  const { toggleCheck, toggleDelete, deleteForever } = useTodos();

  const handleCheck = () => {
    setChecked((checked) => !checked);
    toggleCheck(todo.id);
  };

  return (
    <div className="todo">
      <div className="todo__content">
        <IoMdMore onClick={toggle} className="todo__more" />
        <input
          className="todo__checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
        />
        <span className={`todo__text ${todo.checked ? "todo__line" : ""}`}>
          {todo.text}
        </span>
      </div>
      <div className="todo__actions">
        <Modal mode={mode}>
          {todo.deleted ? (
            <>
              <div
                className="todo__option"
                onClick={() => deleteForever(todo.id)}
                style={{ marginBottom: "0.8rem" }}
              >
                <MdDelete />
                <span>Delete Forever</span>
              </div>
              <div
                className="todo__option"
                onClick={() => toggleDelete(todo.id)}
              >
                <MdLibraryAddCheck />
                <span>Move to To Do</span>
              </div>
            </>
          ) : (
            <div className="todo__option" onClick={() => toggleDelete(todo.id)}>
              <MdDelete />
              <span>Move to Trash</span>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export { Todo };
