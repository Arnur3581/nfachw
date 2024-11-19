import { Title } from "./Title";
import { Editor } from "../Editor/Editor";
import Dog from "../../assets/images/dog.png";
import { PostsList } from "../Posts/PostsList";
import { posts } from "../../data";

const Main = () => {
  return (
    <main
      className="main"
      style={{
        width: "40%",
        margin: "0 30%",
      }}
    >
      <Title>Home</Title>
      <Editor avatar={Dog} />
      <PostsList posts={posts} />
    </main>
  );
};

export { Main };
