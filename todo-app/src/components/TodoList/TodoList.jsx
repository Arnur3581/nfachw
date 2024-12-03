import { useTodos } from "../../hooks/useTodos";
import { Todo } from "../Todo/Todo";
import "./TodoList.css";

/* eslint-disable react/prop-types */
const TodoList = ({ type }) => {
  const { todos } = useTodos();
  const filteredTodos = {
    active: todos.filter((todo) => !todo.checked && !todo.deleted),
    done: todos.filter((todo) => todo.checked && !todo.deleted),
    trash: todos.filter((todo) => todo.deleted),
  };

  const titleTexts = {
    active: "To Do",
    done: "Done",
    trash: "Trash",
  };

  return (
    <div className="todo-list">
      <h2 className="todo-list__title">{titleTexts[type]}</h2>
      <div className="todo-list__line"></div>
      <div className="todo-list__todos">
        {filteredTodos[type].length !== 0 ? (
          filteredTodos[type].map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <span style={{ color: "#959595" }}>No Todos in List</span>
        )}
      </div>
    </div>
  );
};

export { TodoList };
