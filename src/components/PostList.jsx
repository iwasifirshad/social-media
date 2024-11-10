import WelcomeMessage from "./Welcome";
import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length == 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
};

export default PostList;
