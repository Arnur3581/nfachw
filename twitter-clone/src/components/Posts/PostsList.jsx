/* eslint-disable react/prop-types */
import { Post } from "./Post";

const PostsList = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export { PostsList };
