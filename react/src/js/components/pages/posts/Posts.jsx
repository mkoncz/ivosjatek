// Import ReactJS module.
import React from "react";
import Modal from 'react-modal';

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

// Import post style classes.
import "./../../../../css/pages/posts.css";

// Import adult logo.
import adult_logo from "./../../../../img/18.png";

// Import post content
import * as posts_objects from "./../../../../locales/posts_hu.json"


import Post from "./Post"

/**
 * The page contains the list of posts.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 */
const Posts = props => {

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

  let posts = posts_objects.default.all_posts;

  for (var i = posts.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = posts[i];
    posts[i] = posts[j];
    posts[j] = temp;
  }

  // Returns the opened post
  const getCurrentPost = () => {
    let post;
    posts.forEach(element => {
      if (element[0].type === 'meta') {
        if (window.location.pathname.includes(element[0].slug)) {
          post = <Post
            postObjects={element}>
          </Post>
        }
      }
    });
    return post;
  }

  // Returns the opened post
  const getAllThumbs = () => {
    return posts.map(element => {
      return (
        <div>
          <a href={`/p/${element[0].slug}`}>
            <img width="100%" src={element[0].img}
              className="post-thumbnail" alt={props.i18n.t("nav.posts")} />
            <div className="post-thumbnail-title-container" >
              <h4 className="post-thumbnail-title">
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
    <div className="page-frame">
      <Helmet>
        <title>{props.i18n.t("nav.posts")} | {props.i18n.t("nav.title")}</title>
        <meta name="description" content={props.i18n.t("desc.posts")} />
        <link rel="canonical" href="https://ivosjatek.hu/posts" />
        <meta property="og:locale" content={props.currentLanguage === "en" ? "en_US" : "hu_HU"} />
      </Helmet>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => { setIsOpen(false) }}
        style={postModalStyle}
        contentLabel="18 éves"
      >
        <div className="post-card-big">
          <div className="pre-card">
            <img className="adult_logo" src={adult_logo} alt="18" />
            <div className="question_block">
              <h5>Kérhetnék egy személyit?</h5>
              <p>Az ivosjatek.hu 18 éven felülieknek készült.</p>
            </div>
            <button
              className="btn btn-warning btn-lg"
              onClick={() => { setIsOpen(false) }}>
              Felnőtt vagyok
                        </button>
          </div>
        </div>
      </Modal>
      <h1>{props.i18n.t("nav.posts")}</h1>

      {getCurrentPost()}
      {getAllThumbs()}

    </div>
  );
}

// Export component.
export default Posts;