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
const PostJuly = () => {
    const [modalIsOpen, setIsOpen] = React.useState(true);

    return (
        <div className="page-frame">
            <Helmet>
                <title>A legnépszerűbb ex-felnőttfilmes videói törlését kéri</title>
                <meta name="description" content="A legnépszerűbb felnőttfilmes megbánta volt, hogy erre az útra lépett. Most a videói törlését kéri." />
                <link rel="canonical" href="https://ivosjatek.hu/p/felnottfilmes-keri-a-videoi-torleset" />
            </Helmet>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setIsOpen(false) }}
                style={customStyles}
                contentLabel="18 éves"
            >
                <div className="post-card-big">
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
            </Modal>

            <h3 className="post-h">Majdnem kétmillióan kérik, hogy távolítsák el a netről a világ legismertebb pornósának videóit</h3>
            <p className="post-p">
                Mia Khalifa mindössze három hónapon át dolgozott a felnőttfilmes szakmában,
                és ezalatt alig tizenegy videója készült. <br />
                Ennek ellenére 2014 óta még mindig ő a világ egyik leghíresebb és az interneten legtöbbet
                keresett pornósa. A most 27 éves libanoni-amerikai
                nő azonban mára nagyon megbánta, hogy hat évvel ezelőtt belekóstolt a pornózásba.
            </p>

            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/BvXHuuWFj8X/?utm_source=ig_web_copy_link"
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
                Mia azt mondja, ő mindössze 12 ezer dollárt (kb. 3,7 millió forintot)
                keresett a videóival, melyekkel a PornHub pornómegosztó és a BangBros
                nevű pornóforgalmazó még évekkel később is dollármilliókat kaszál.
                Ennek a kizsákmányolásnak szeretne véget venni azzal, hogy leveteti összes videóját az internetről.
            </h5>

            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/BuIWvVzlmgJ/?utm_source=ig_web_copy_link"
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

            <p className="post-p">
                A nő már többször próbálta megvásárolni pornóvideóit, hogy azokat végleg
                eltüntethesse a világhálóról, ám a jogtulajdonosok ennek érthető módon ellenállnak.
            </p>

            <h5 className="post-h">
                "Az a 11 videó kísérteni fog a halálom napjáig"
            </h5>

            <p className="post-p">
                A jelenleg sportműsorokat készítő Mia Khalifa most azt szeretné, ha azok végleg eltűnnének az internetről.
                Az Instagramon 21 millió követővel rendelkező nő egy online petíciót indított, hogy elérje a célját.
                Az ügyét már több mint 1,8 millió ember támogatta.
            </p>

            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/BrP0J7Zlhhm/?utm_source=ig_web_copy_link"
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

            <p className="post-p">
                A kérvényt <a href="https://www.change.org/p/pornhub-justice-for-mia-khalifa">itt</a> tudjátok aláírni.
            </p>

            <h4 className="post-h">
                A cikk a következő kártyákat inspirálta:
            </h4>

            <div align="center">
                <div className="post-card">
                    <div className="post-card-text">
                        Az iszik, aki látott már élőben pornószínészt / színésznőt.
                </div>
                </div>
                <div className="post-card">
                    <div className="post-card-text">
                        Hívj fel valakit és kérdezd meg tud-e egy jó pornóoldalt! Ha nem mered, igyál egy rövidet!
                </div>
                </div>
                <div className="post-card">
                    <div className="post-card-text">

                        A többiek próbálják kitalálni! Szerinted a pornósok inkább színészek vagy prostituáltak? Aki rosszul tippel, az iszik.
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
export default PostJuly;