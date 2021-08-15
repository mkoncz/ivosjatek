// Import ReactJS module.
import React from "react";

// Import Next modules.
import Link from 'next/link';

// Import cookie handling module.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "./../components/navbar/NavBar";
import CustomHead from "./../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "./../i18n";

// Import post content
import posts_object from "./../locales/posts.json"

/**
 * The page contains the list of posts.
 */
const Posts = () => {

  initLanguageCookie();

  const posts = posts_object.all_posts;

  const cookies = new Cookies();

  const localized_posts = posts.filter(post => post[0].lang === cookies.get("lang"));

  // Returns the thumbnail of all posts.
  const getAllThumbs = () => {
    return localized_posts.map(element => {
      return (
        <div key={element[0].slug}>
          <Link href={`/posts/${element[0].slug}`}>
            <a>
              <img width="100%" src={element[0].img}
                className="post-thumbnail" alt={t("nav.posts")} />
              <div className="post-thumbnail-title-container" >
                <h4>
                  {element[0].title}
                </h4>
              </div>
            </a>
          </Link>
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