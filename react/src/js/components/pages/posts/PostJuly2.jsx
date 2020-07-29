// Import React module.
import React from "react";
import Modal from 'react-modal';

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";
// Import Instagram Embed tool.
import InstagramEmbed from "react-instagram-embed";

import adult_logo from "./../../../../img/18.png";

const customStyles = {
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
};

/**
 * The page contains a post.
 * Posts are not really relevant for this website. 
 * They are needed because of SEO reasons.
 */
const PostJuly2 = () => {
    const [modalIsOpen, setIsOpen] = React.useState(true);

    return (
        <div className="page-frame">
            <Helmet>
                <title>MMA harcos lesz Ukrajna legnagyobb mellű nője</title>
                <meta name="description" content="MMA harcos lesz Ukrajna legnagyobb mellű nője" />
                <link rel="canonical" href="https://ivosjatek.hu/p/ketrecharcos-lesz-ukrajna-legnagyobb-mellu-noje" />
            </Helmet>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setIsOpen(false) }}
                style={customStyles}
                contentLabel="18 éves"
            >
                <div className="post-card-big">
                    <div className="txt-question">
                        <div className="pre-card">
                            <img className="adult_logo" src={adult_logo} alt="18" />
                            <div className="question_block">
                                <h5>Kérhetnék egy személyit?</h5>
                                <p>Az IvósJáték egy 18 éven felülieknek készült játék.</p>
                            </div>
                            <button
                                className="btn btn-warning btn-lg"
                                onClick={() => { setIsOpen(false) }}>
                                Felnőtt vagyok
                            </button>
                        </div>
                    </div>

                </div>
            </Modal>
            <h3 className="post-h">Új hivatásba kezd Ukrajna hivatalos "legnagyobb természetes mell" rekordere</h3>
            <p className="post-p">
                Az ukrán Mila Kuznetsova modellként kezdte karrierjét. Megnyerte a Miss Ukrajna, majd a Miss World Plus Size Queen címet.
                <br />Az egykori modell mellbőségét tavaly mérte a nemzeti rekordokat nyilvántartó
                hivatal egyik képviselője Kijevben.
            </p>
            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/CBapDnMBJ81/?utm_source=ig_web_copy_link"
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
            <h5 className="post-h">
                A tekintélyes méretű kebleket viselő hölgy 135,5 centiméteres mellbőségével és M-es kosárméretével
                új nemzeti rekordot állított fel a legnagyobb természetes mell kategóriában.
            </h5>
            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/CBsTsRThhpp/?utm_source=ig_web_copy_link"
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

            <h5 className="post-h">
                Azonban az egykori modell most új hivatás elé néz, tervei szerint a továbbiakban MMA harcosként folyatatná karrierjét.
                Szerinte a mérkőzései Ukrajna lenézettebb közdősport meccsei lennének, mivel már több, mint 600 ezer Instagram követője van.
            </h5>

            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/CC-9wXMh_nl/?utm_source=ig_web_copy_link"
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

            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/CBfrtsbjGqM/?utm_source=ig_web_copy_link"
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

            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/CBkyNPGBR8F/?utm_source=ig_web_copy_link"
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

            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/CCip2tfhdCv/?utm_source=ig_web_copy_link"
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

            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/B4SI-Rjhz3H/?utm_source=ig_web_copy_link"
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

            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/B4wpNDWhAYf/?utm_source=ig_web_copy_link"
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

            <br />
            <h4 className="post-h">
                A cikk a következő kártyákat inspirálta:
            </h4>
            <div align="center">
                <div className="post-card">
                    <div className="post-card-text">
                        Az iszik, aki fogott már szilikon melleket.
                </div>
                </div>
                <div className="post-card">
                    <div className="post-card-text">
                        Az iszik, akinek a legnagyobb a melle.
                </div>
                </div>
                <div className="post-card">
                    <div className="post-card-text">
                        Igyon egyet, aki villantott már mellet idegeneknek!
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
export default PostJuly2;