// Import React modules.
import React from "react";

// Import Instagram Embed tool.
import InstagramEmbed from "react-instagram-embed";

/**
 * The page contains a drinking game.
 */
const DrinkingGame = (props) => {

    const createHeader = (postObject, index) => {
        let level = postObject.level;
        let text = postObject.text;
        if (level === 1) {
            return <h1 key={`h1-${index}`} className="post-h">{text}</h1>
        }
        else if (level === 2) {
            return <h2 key={`h2-${index}`} className="post-h">{text}</h2>
        }
        else if (level === 3) {
            return <h3 key={`h3-${index}`} className="post-h">{text}</h3>
        }
        else if (level === 4) {
            return <h4 key={`h4-${index}`} className="post-h">{text}</h4>
        }
        else if (level === 5) {
            return <h5 key={`h5-${index}`} className="post-h">{text}</h5>
        }
    }

    const createParagraph = (postObject, index) => {
        let text = postObject.text;
        return <p key={`p-${index}`} className="post-p">{text}</p>
    }

    const createSource = (postObject, index) => {
        let text = postObject.text;
        return <p key={`p-${index}`} className="post-source-p">{text}</p>
    }

    const createLink = (postObject, index) => {
        let url = postObject.url;
        let text = postObject.text;
        return <a key={`a-${index}`} href={url}>{text}</a>
    }

    const createIGPost = (postObject, index) => {
        return <div key={`ig-${index}`} className="post-social-media" align="center" >
            <InstagramEmbed
                url={postObject.url}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
            />
        </div>
    }

    const createCards = (postObject, index) => {
        return <div key={index} align="center">
            {postObject.cards.map((card, cardIndex) => {
                return <div key={cardIndex} className="post-card">
                    <div className="post-card-text">
                        {card}
                    </div>
                </div>
            })}
            <div>
                Ivósjáték: <a href="/">katt ide</a>
            </div>
        </div>
    }

    const createImage = (postObject) => {
        return (
            <div align="center">
                <img
                    width="100%"
                    className="post-image"
                    alt="drink"
                    src={postObject.url}>
                </img>
            </div>)
    }

    const createRedditCard = (postObject) => {
        return (
            <blockquote class="reddit-card">
                <a href={postObject.url}></a>
            </blockquote>
        )
    }


    return (
        <div className="page-frame">
            {props.postObjects.map((postObject, index) => {
                if (postObject.type === 'header') {
                    return createHeader(postObject, index);
                }
                else if (postObject.type === 'par') {
                    return createParagraph(postObject, index);
                }
                else if (postObject.type === 'src') {
                    return createSource(postObject, index);
                }
                else if (postObject.type === 'link') {
                    return createLink(postObject, index);
                }
                else if (postObject.type === 'ig') {
                    return createIGPost(postObject, index);
                }
                else if (postObject.type === 'cards') {
                    return createCards(postObject, index);
                }
                else if (postObject.type === 'img') {
                    return createImage(postObject, index);
                }
                else if (postObject.type === 'reddit') {
                    return createRedditCard(postObject, index);
                }
            })}
        </div>
    );
}

// Export component.
export default DrinkingGame;