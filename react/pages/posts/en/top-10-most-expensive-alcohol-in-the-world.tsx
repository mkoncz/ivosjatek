// Import ReactJS modules.
import React from "react";

// Import Post template components.
import Post from "../../../components/posts-page/Post";

/**
 * The page contains the list of posts.
 */
const SelectedPost = () => {
  const postSlug = "top-10-most-expensive-alcohol-in-the-world";
  const language = "en";

  return <Post postSlug={postSlug} language={language}></Post>;
};

// Export component.
export default SelectedPost;
