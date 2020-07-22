// Import React module.
import React from "react";

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

import InstagramEmbed from "react-instagram-embed";

/**
 * The page contains a post.
 * Posts are not really relevant for this website. 
 * They are needed because of SEO reasons.
 */
const PostJuly2 = props => {
    return (
        <div className="page-frame">
            <Helmet>
                <title>MMA harcos lesz Ukrajna legnagyobb mellű nője</title>
                <meta name="description" content="MMA harcos lesz Ukrajna legnagyobb mellű nője" />
                <link rel="canonical" href="https://ivosjatek.hu/p/ketrecharcos-lesz-ukrajna-legnagyobb-mellu-noje" />
            </Helmet>
            <h3 className="post-h">Új hivatásba kezd Ukrajna 2019-es "legnagyobb természetes mell" rekordere</h3>
            <p className="post-p">
                Az ukrán Mila Kuznetsova modellként kezdte karrierjét. Megnyerte a Miss Ukrajna, majd a Miss World Plus Size Queen címet.
                <br />Az egykori modell mellbőségét tavaly mérte a nemzeti rekordokat nyilvántartó
                hivatal egyik képviselője Kijevben.
            </p>
            <div align="center">
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

            <h5 className="post-h">
                A tekintélyes méretű kebleket viselő hölgy 135,5 centiméteres mellbőségével és M-es kosárméretével
                új nemzeti rekordot állított fel a legnagyobb természetes mell kategóriában.
            </h5>
            <div align="center">
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
            </h5>

            <div align="center">
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
            <div align="center">
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
            <div align="center">
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
            <div align="center">
                <InstagramEmbed
                    url="https://www.instagram.com/p/B4SI-Rjhz3H/?utm_source=ig_web_copy_link"
                    hideCaption={true}
                    containerTagName="div"
                    protocol="https://www.instagram.com/p/B4SI-Rjhz3H/?utm_source=ig_web_copy_link"
                    injectScript
                    onLoading={() => { }}
                    onSuccess={() => { }}
                    onAfterRender={() => { }}
                    onFailure={() => { }}
                />
            </div>
            <div align="center">
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
            <div align="center">
                <InstagramEmbed
                    url="https://www.instagram.com/p/B8YXvjJBW-v/?utm_source=ig_web_copy_link"
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
    );
}

// Export component.
export default PostJuly2;