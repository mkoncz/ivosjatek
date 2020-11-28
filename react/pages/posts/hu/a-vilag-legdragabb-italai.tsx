// Import ReactJS modules.
import React, {Component} from "react";

import Cookies from "universal-cookie";

// Import components.
import NavBar from "../../../components/navbar/NavBar";
import CustomHead from "../../../components/head/CustomHead";
import Post from "../../../components/posts-page/Post"

// Import post content
import * as posts_objects from "../../../locales/posts.json";

// Import translate function.
import { t, initLanguageCookie } from "../../../i18n";
import AdultConsent from "../../../components/modal/AdultConsent";

/**
 * The page contains the list of posts.
 */
const SelectedPost = () => {

  initLanguageCookie();
  
  const cookies = new Cookies();
  
  const posts = posts_objects.all_posts;

  const localized_posts = posts.filter(post => post[0].lang === cookies.get("lang"));

  const postSlug = "a-vilag-legdragabb-italai";

  // Returns the opened post
  const getCurrentPost = () => {
    let post;
    localized_posts.forEach(element => {
      if (element[0].type === 'meta') {
        if (element[0].slug.includes(postSlug)) {
          post = (
            <Post
              postObjects={element}
            />
          )
        }
      }
    });
    return post;
  }

  // Returns the thumbnail of all posts
  const getAllThumbs = () => {
    return localized_posts.map(element => {
      return (
        <div key={element[0].slug}>
          <a href={`/posts/${element[0].slug}`}>
            <img width="100%" src={element[0].img}
              className="post-thumbnail" alt={t("nav.posts")} />
            <div className="post-thumbnail-title-container" >
              <h4>
                {element[0].title}
              </h4>
            </div>
          </a>
          <div className="post-separator"></div>
        </div>
      )
    });
  }

  return (
    <div>
      <CustomHead
        title={t("nav.posts")}
        desc={t("desc.posts")}
        url={"https://ivosjatek.hu/a-vilag-legdragabb-italai"}
      />
      <NavBar />
      <div className="page-frame">
        <AdultConsent/>
        {getCurrentPost()}
        <h1>{t("nav.posts")}</h1>
        {getAllThumbs()}
      </div>
    </div>
  );
}

// Export component.
export default SelectedPost;