import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const useTodos = () => {
  const todos = useContext(TodoContext);

  if (!todos) throw new Error("Хук использован вне провайдера");

  return todos;
};

export { useTodos };
