// Import ReactJS module.
import React from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "./../components/navbar/NavBar";
import CustomHead from "./../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "./../i18n";

// Import post content
import * as posts_objects from "./../locales/posts.json"

/**
 * The page contains the list of posts.
 */
const Posts = () => {
  
  initLanguageCookie();
  
  const posts = posts_objects.all_posts;

  const cookies = new Cookies();

  const localized_posts = posts.filter(post => post[0].lang === cookies.get("lang"));

  // Returns the thumbnail of all posts.
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
        url={"https://ivosjatek.hu/posts"}
      />
      <NavBar />
      <div className="page-frame black-background">
        <h1>{t("nav.posts")}</h1>
        {getAllThumbs()}
      </div>
    </div>
  );
}

// Export component.
export default Posts;