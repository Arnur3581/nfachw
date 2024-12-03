/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const addTodo = (text) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        text: text,
        checked: false,
        deleted: false,
      },
    ]);
  };

  const toggleCheck = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const toggleDelete = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, deleted: !todo.deleted } : todo
      )
    );
  };

  const deleteForever = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleCheck,
        toggleDelete,
        deleteForever,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
