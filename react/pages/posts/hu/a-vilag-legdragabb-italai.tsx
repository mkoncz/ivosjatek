// Import ReactJS modules.
import React from "react";

// Import Post template components.
import Post from "../../../components/posts-page/Post";

/**
 * The page contains the list of posts.
 */
const SelectedPost = () => {
  const postSlug = "a-vilag-legdragabb-italai";
  const language = "hu";

  return <Post postSlug={postSlug} language={language}></Post>;
};

// Export component.
export default SelectedPost;
