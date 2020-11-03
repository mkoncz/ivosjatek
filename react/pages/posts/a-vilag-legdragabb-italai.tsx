// Import ReactJS modules.
import React, {Component} from "react";
import Modal from 'react-modal';

import Cookies from "universal-cookie";

// Import components.
import NavBar from "../../components/navbar/NavBar";
import CustomHead from "../../components/head/CustomHead";
import Post from "../../components/posts-page/Post"

// Import post content
import * as posts_objects_hu from "../../locales/posts_hu.json";
import * as posts_objects_en from "../../locales/posts_en.json";

// Import translate function.
import { t, initLanguageCookie } from "../../i18n";

/**
 * The page contains the list of posts.
 */
const SelectedPost = () => {

  initLanguageCookie();

  const [modalIsOpen, setIsOpen] = React.useState(true);

  const postModalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#000",
      textAlign: "center"
    }
  }

  let postSlug = "a-vilag-legdragabb-italai";

  let cookies = new Cookies();

  let posts = cookies.get("lang") ? posts_objects_hu.all_posts : posts_objects_en.all_posts;

  // Returns the opened post
  const getCurrentPost = () => {
    let post;
    posts.forEach(element => {
      if (element[0].type === 'meta') {
        if (postSlug === element[0].slug) {
          post = (
            <Post
              postObjects={element}
            >
            </Post>
          )
        }
      }
    });
    return post;
  }

  // Returns the thumbnail of all posts
  const getAllThumbs = () => {
    return posts.map(element => {
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
        url={"https://ivosjatek.hu/a-vliag-legdragabb-italai"}
      />
      <NavBar />
      <div className="page-frame">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => { setIsOpen(false) }}
          style={postModalStyle}
          contentLabel="18 éves"
        >
          <div className="post-card-big">
            <div className="pre-card">
              <img className="adult_logo" src="/img/18.png" alt="18" />
              <div className="question_block">
                <h5>{t("game.age_check_1")}</h5>
                <p>{t("game.age_check_v2")}</p>
              </div>
              <button
                className="btn btn-warning btn-lg"
                onClick={() => { setIsOpen(false) }}>
                {t("game.age_check_button")}
              </button>
            </div>
          </div>
        </Modal>
        {getCurrentPost()}
        <h1>{t("nav.posts")}</h1>
        {getAllThumbs()}
      </div>
    </div>
  );
}

// Export component.
export default SelectedPost;