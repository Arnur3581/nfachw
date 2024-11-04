import { Header } from "./components/Header/Header";
import { ArticleList } from "./components/Articles/ArticlesList";
import { articles } from "./articles.js";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header name="medium alike" logo="Hello, world!" />
      <ArticleList articles={articles} />
      <Footer />
    </>
  );
}

export default App;
