// Import React modules.
import React from "react";

// Import Next modules.
import Link from "next/link";

// Import local components.
import AdultConsent from "../../components/modal/AdultConsent";
import NavBar from "../../components/navbar/NavBar";
import CustomHead from "../../components/head/CustomHead";

// Import post content.
import posts_object from "../../locales/posts.json";

// Import cookie handling module.
import Cookies from "universal-cookie";

// Import translate function.
import { t, initLanguageCookie } from "../../i18n";

// Interfaces for props.
interface PostProps {
  postSlug: string;
  language: string;
}

/**
 * The page contains a post.
 */
const Post = (props: PostProps) => {
  initLanguageCookie();

  const cookies = new Cookies();

  const posts = posts_object.all_posts;

  const localized_posts = posts.filter(
    (post) => post[0].lang === cookies.get("lang")
  );

  /**
   * Creates a header element.
   */
  const createHeader = (postObject, index) => {
    let level = postObject.level;
    let text = postObject.text;
    if (level === 1) {
      return (
        <h1 key={`h1-${index}`} className="post__header">
          {text}
        </h1>
      );
    } else if (level === 2) {
      return (
        <h2 key={`h2-${index}`} className="post__header">
          {text}
        </h2>
      );
    } else if (level === 3) {
      return (
        <h3 key={`h3-${index}`} className="post__header">
          {text}
        </h3>
      );
    } else if (level === 4) {
      return (
        <h4 key={`h4-${index}`} className="post__header">
          {text}
        </h4>
      );
    } else if (level === 5) {
      return (
        <h5 key={`h5-${index}`} className="post__header">
          {text}
        </h5>
      );
    }
  };

  /**
   * Creates a paragraph element.
   */
  const createParagraph = (postObject, index) => {
    let text = postObject.text;
    return (
      <p key={`p-${index}`} className="post__paragraph">
        {text}
      </p>
    );
  };

  /**
   * Creates a source link element.
   */
  const createSource = (postObject, index) => {
    let text = postObject.text;

    return (
      <p key={`p-${index}`} className="post__source">
        {text}
      </p>
    );
  };

  /**
   * Creates card elements.
   */
  const createCards = (postObject, index) => {
    return (
      <div key={index}>
        {postObject.cards.map((card, cardIndex) => {
          return (
            <div key={cardIndex} className="post__card">
              {card}
            </div>
          );
        })}
        <div>
          {t("posts.drinking_game")}:{" "}
          <Link href="/">{t("posts.click_here")}</Link>
        </div>
      </div>
    );
  };

  /**
   * Creates an image element.
   */
  const createImage = (postObject, index) => {
    return (
      <img
        key={`img-${index}`}
        width="50%"
        className="post__image"
        alt="drink"
        src={postObject.url}
      />
    );
  };

  /**
   * Creates a link element.
   */
  const createLink = (postObject, index) => {
    let url = postObject.url;
    let text = postObject.text;
    return (
      <Link key={`a-${index}`} href={url}>
        {text}
      </Link>
    );
  };

  /**
   * Creates a reddit element.
   */
  const createRedditCard = (postObject, index) => {
    return (
      <blockquote key={index} className="reddit-card">
        <Link href={postObject.url}>
          <a>link</a>
        </Link>
      </blockquote>
    );
  };

  // Returns the thumbnails of posts.
  const getAllBlocks = () => {
    return localized_posts.map((element) => {
      return (
        <div key={element[0].slug}>
          <Link href={`/posts/${element[0].slug}`}>
            <a>
              <img
                width="100%"
                src={element[0].img}
                className="posts__thumbnail"
                alt={t("nav.posts")}
              />
              <div className="posts__title-container">
                <h4 className="posts__title">{element[0].title}</h4>
              </div>
            </a>
          </Link>
          <div className="posts__separator"></div>
        </div>
      );
    });
  };

  // Gets the current post.
  const getCurrentPost = () => {
    let post = [];
    localized_posts.forEach((element) => {
      if (element[0].type === "meta") {
        if (element[0].slug.includes(props.postSlug)) {
          post = element.map((postObject, index) => {
            if (postObject.type === "header") {
              return createHeader(postObject, index);
            } else if (postObject.type === "par") {
              return createParagraph(postObject, index);
            } else if (postObject.type === "src") {
              return createSource(postObject, index);
            } else if (postObject.type === "link") {
              return createLink(postObject, index);
            } else if (postObject.type === "cards") {
              return createCards(postObject, index);
            } else if (postObject.type === "img") {
              return createImage(postObject, index);
            } else if (postObject.type === "reddit") {
              return createRedditCard(postObject, index);
            }
            return "";
          });
        }
      }
    });
    return post;
  };

  return (
    <div>
      <CustomHead
        title={t("nav.posts")}
        desc={t("desc.posts")}
        url={`https://ivosjatek.hu/posts/${props.language}/${props.postSlug}`}
      />
      <NavBar />
      <div className="post page-frame">
        <AdultConsent />
        {getCurrentPost()}
        <h2>{t("nav.posts")}</h2>
        {getAllBlocks()}
      </div>
    </div>
  );
};

// Export component.
export default Post;
