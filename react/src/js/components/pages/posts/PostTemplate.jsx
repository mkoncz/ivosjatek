// Import ReactJS module.
import React from "react";

// Instagram icon iamge resource.

import beersImageResource from "./../../../../img/sponsors_page/beers.jpg";


// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";


/**
 * The page contains a post.
 * Posts are not really relevant for this website. 
 * They are needed because of SEO reasons.
 */
const PostTemplate = props => {
    return (
        <div className="page-frame">
            <Helmet>
                <title>{""}</title>
                <meta name="description" content={""} />
                <link rel="canonical" href="https://ivosjatek.hu/" />
            </Helmet>
            <h2>Example</h2>
            <h3>Example</h3 >
            <img src={beersImageResource} className="post-image" alt=""/>
            <a href="google.com" >Forrás: </a>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
    );
}

// Export component.
export default PostTemplate;