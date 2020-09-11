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


/**
 * The page contains a post.
 * Posts are not really relevant for this website. 
 * They are needed because of SEO reasons.
 * http://www.borsonline.hu/celeb/4000-novel-fekudt-le-mar-a-pornos-elmondta-kivel-volt-a-legjobb/132231
 */
const PostJuly3 = () => {
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
                <title>Pornósnak állt az autóversenyzőnő, mert abban sokkal több a pénz</title>
                <meta name="description" content="Pornósnak állt az autóversenyzőnő, mert abban sokkal több a pénz" />
                <link rel="canonical" href="https://ivosjatek.hu/p/pornosnak-allt-az-autoversenyzono" />
                <meta name="twitter:title" content="Pornósnak állt az autóversenyzőnő, mert abban sokkal több a pénz" />
                <meta name="twitter:description" content="Pornósnak állt az autóversenyzőnő, mert abban sokkal több a pénz" />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://ivosjatek.hu/p/pornosnak-allt-az-autoversenyzono" />
                <meta property="og:title" content="Pornósnak állt az autóversenyzőnő, mert abban sokkal több a pénz" />
                <meta property="og:description" content="Pornósnak állt az autóversenyzőnő, mert abban sokkal több a pénz" />
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
            <h3 className="post-h">Renee Gracie neve az autósport kedvelőinek ismerős lehet,
            ugyanis ő volt a Supercars túraautó-bajnokság első hivatalos női versenyzője.
           </h3>
           <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/BKxQViIB7KH/?utm_source=ig_web_copy_link"
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
                A hölgy azonban állítása szerint nem keresett eleget, ezért szakmát váltott, és ma már egy teljesen más iparágban dolgozik.
            </h5>
            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/BehsrYKBeE0/?utm_source=ig_web_copy_link"
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
                Az új munkáját a rajongói segítségével találta meg.
                Tőlük hallott az OnlyFans nevű oldalról, és úgy döntött, ő maga is kipróbálja.
            </h5>
            <img width="100%" alt="post" src="https://instagram.fbud5-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/85177697_611790616339729_5624231337082637946_n.jpg?_nc_ht=instagram.fbud5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ueVAHdKe0OIAX9Xwx3i&oh=2e967c6c5dfedd4d0168ab6174eda3ce&oe=5F530D77"></img>
            <p className="post-source-p">
                Forrás: Instagram
           </p>
            <p className="post-p">
                Az OnlyFans egy exkluzív tartalmakat nyújtó fizetős oldal.
                 A karantén időszakban sok pornós ebben találta meg az üzleti lehetőséget, mert a forgatások
                 leálltak. Renee Gracie hamar sikeres lett, így aztán rendesen kaszál a dologgal.
            </p>
            <img width="100%" alt="post" src="https://instagram.fbud5-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/89469910_504415236909147_3590977226518286581_n.jpg?_nc_ht=instagram.fbud5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=AOkoXgLKxm0AX_xPaxc&oh=245f9efe584a79032f0e1e7b5fd92f59&oe=5F5396FF"></img>
            <p className="post-source-p">
                Forrás: Instagram
           </p>
            <h5 className="post-h">
                Az ausztrál lány eleinte csak meztelen képeket töltött fel az
                oldalra, de felbuzdulva hirtelen jött népszerűségén, ma már szexvideókat is csinál.
            </h5>
            <img width="100%" alt="post" src="https://instagram.fbud5-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/93450510_3306145919404255_7053680524420074949_n.jpg?_nc_ht=instagram.fbud5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=nSFuxxMpp1oAX_7glJH&oh=02a4ed6d5542aae7badf74b8fabd86fa&oe=5F51DEA2"></img>
            <p className="post-source-p">
                Forrás: Instagram
           </p>
            <h5 className="post-h">
                Renne a legrosszabb esetben is megkeres havi 50 ezer fontot (20 millió forintot).
            </h5>

            <img width="100%" alt="post" src="https://instagram.fbud5-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/94721708_158839568944872_5527489680538316493_n.jpg?_nc_ht=instagram.fbud5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=WDtY_MCm8xwAX9Po12D&oh=14c88dc80a50cb113deb3e9a26f1da21&oe=5F52D588"></img>
            <p className="post-source-p">
                Forrás: Instagram
           </p>

            <p className="post-p">
                Gracie új karrierjéről egyébként a Supercars is hallott, ám kijelentették: elhatárolódnak korábbi versenyzőjüktől.
            </p>
            <div className="post-social-media" align="center" >
                <InstagramEmbed
                    url="https://www.instagram.com/p/CBfRVimFwNE/?utm_source=ig_web_copy_link"
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
                        Az iszik, aki fizetett már elő egy pornóoldalra.
                  </div>
                </div>
                <div className="post-card">
                    <div className="post-card-text">
                        Mindenki mond egy autó márkát. A jobbra ülő kezd, és addig mennek a körök, amíg valaki már nem tud mondani. Ő iszik.  </div>
                    </div>
                <div className="post-card">
                    <div className="post-card-text">
                        A többiek próbálják kitalálni! Néztél már pornót a partnereddel? Aki rosszul tippel, az iszik.
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
export default PostJuly3;