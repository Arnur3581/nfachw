import { useState } from "react";
import { Actions } from "./components/Actions/Actions";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";

const App = () => {
  const [type, setType] = useState("active");

  return (
    <>
      <Header />
      <Actions setType={setType} />
      <TodoList type={type} />
    </>
  );
};

export { App };
