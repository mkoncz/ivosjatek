// Import ReactJS module.
import React from "react";

// Import GitHub logo.
import miaImageResource from "./../../../../img/posts/mia.jpg";


// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

/**
 * The page contains the list of posts.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 */
const Posts = props => {
  return (
    <div className="page-frame">
      <Helmet>
        <title>{props.i18n.t("nav.posts")} | {props.i18n.t("nav.title")}</title>
        <meta name="description" content={props.i18n.t("desc.posts")} />
        <link rel="canonical" href="https://ivosjatek.hu/posts" />
      </Helmet>
      <h1>{props.i18n.t("nav.posts")}</h1>

      <a href="/p/felnottfilmes-keri-a-videoi-torleset">
        <img src={miaImageResource} className="post-thumbnail" alt={props.i18n.t("nav.posts")} />
        <div className="post-thumbnail-title-container" >
          <h4 className="post-thumbnail-title">
            Majdnem kétmillióan kérik, hogy távolítsák el a netről a világ legismertebb pornósának videóit
          </h4>
        </div>
      </a>

    </div>
  );
}

// Export component.
export default Posts;