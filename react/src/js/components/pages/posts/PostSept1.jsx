// Import React modules.
import React from "react";
import Modal from 'react-modal';

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

// Import Instagram Embed tool.
import InstagramEmbed from "react-instagram-embed";

// Import adult logo.
import adult_logo from "./../../../../img/18.png";

// Import post style classes.
import "./../../../../css/pages/posts.css";
import "./../../../../css/pages/posts.css";


/**
 * The page contains a post.
 * Posts are not really relevant for this website. 
 * They are needed because of SEO reasons.
 */
const PostAug = () => {
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

    return (
        <div className="page-frame">
            <Helmet>
                <title>Ukrán pizza reklám készült a mémmé vált Piper Perri videó mintájára. Erre kitennétek a 18-as karikát? </title>
                <meta name="description" content="Ukrán pizza reklám készült a mémmé vált Piper Perri videó mintájára. Erre kitennétek a 18-as karikát?" />
                <link rel="canonical" href="https://ivosjatek.hu/p/ukran-pizza-reklam" />
                <meta name="twitter:title" content="Ukrán pizza reklám készült a mémmé vált Piper Perri videó mintájára. Erre kitennétek a 18-as karikát?" />
                <meta name="twitter:description" content="Ukrán pizza reklám készült a mémmé vált Piper Perri videó mintájára. Erre kitennétek a 18-as karikát?" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ivosjatek.hu/p/ukran-pizza-reklam" />
                <meta property="og:title" content="Ukrán pizza reklám készült a mémmé vált Piper Perri videó mintájára. Erre kitennétek a 18-as karikát?" />
                <meta property="og:description" content="Ukrán pizza reklám készült a mémmé vált Piper Perri videó mintájára. Erre kitennétek a 18-as karikát?" />
                <meta property="og:locale" content="hu_HU" />
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
            <h3 className="post-h">Ukrán pizza reklám készült a mémmé vált Piper Perri videó mintájára. Erre kitennétek a 18-as karikát?</h3>
            <blockquote class="reddit-card" data-card-created="1599822707"><a href="https://www.reddit.com/r/funny/comments/iis6ud/pizza_ads_in_ukraine/">Pizza ads in Ukraine</a> from <a href="http://www.reddit.com/r/funny">r/funny</a></blockquote>

            <h4 className="post-h">
                A cikk a következő kártyákat inspirálta:
            </h4>

            <div align="center">
                <div className="post-card">
                    <div className="post-card-text">
                    Igyon egyet, aki szexelt már legalább 2 emberrel egyszerre!
                </div>
                </div>
                <div className="post-card">
                    <div className="post-card-text">
                    Mindenki mond egy vodka márkát. A jobbra ülő kezd, és addig mennek a körök, amíg valaki már nem tud mondani. Ő iszik.
                </div>
                </div>
                <div className="post-card">
                    <div className="post-card-text">
                    Az iszik, aki szerint a pizza jobb, mint a mekis sajtburger.
                </div>
                </div>
                <div>
                    Ivósjáték: <a href="/">katt ide</a>
                </div>
            </div>
        </div>
    );
}

// Export component.
export default PostAug;