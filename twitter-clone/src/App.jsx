import { Main } from "./components/Main/Main";
import { SideBar } from "./components/SideBar/SideBar";
import { Trends } from "./components/Trends/Trends";

const App = () => {
  return (
    <>
      <SideBar />
      <Trends />
      <Main />
    </>
  );
};

export default App;
