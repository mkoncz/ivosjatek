// Import React module.
import React from "react";

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

import InstagramEmbed from 'react-instagram-embed';

/**
 * The page contains a post.
 * Posts are not really relevant for this website. 
 * They are needed because of SEO reasons.
 */
const PostJuly = props => {
    return (
        <div className="page-frame">
            <Helmet>
                <title>A legnépszerűbb ex-felnőttfilmes videói törlését kéri</title>
                <meta name="description" content="A legnépszerűbb felnőttfilmes megbánta volt, hogy erre az útra lépett. Most a videói törlését kéri." />
                <link rel="canonical" href="https://ivosjatek.hu/p/felnottfilmes-keri-a-videoi-torleset" />
            </Helmet>
            <h3 className="post-h">Majdnem kétmillióan kérik, hogy távolítsák el a netről a világ legismertebb pornósának videóit</h3>
            <p className="post-p">
                Mia Khalifa mindössze három hónapon át dolgozott a felnőttfilmes szakmában,
                és ezalatt alig tizenegy videója készült. <br />
                Ennek ellenére 2014 óta még mindig ő a világ egyik leghíresebb és az interneten legtöbbet
                keresett pornósa. A most 27 éves libanoni-amerikai
                nő azonban mára nagyon megbánta, hogy hat évvel ezelőtt belekóstolt a pornózásba.
            </p>
            <InstagramEmbed
                url='https://www.instagram.com/p/BvXHuuWFj8X/?utm_source=ig_web_copy_link'
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />
            <h5 className="post-h">
                Mia azt mondja, ő mindössze 12 ezer dollárt (kb. 3,7 millió forintot)
                keresett a videóival, melyekkel a PornHub pornómegosztó és a BangBros
                nevű pornóforgalmazó még évekkel később is dollármilliókat kaszál.
                Ennek a kizsákmányolásnak szeretne véget venni azzal, hogy leveteti összes videóját az internetről.
            </h5>
            <InstagramEmbed
                url='https://www.instagram.com/p/BuIWvVzlmgJ/?utm_source=ig_web_copy_link'
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />
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

            <InstagramEmbed
                url='https://www.instagram.com/p/BrP0J7Zlhhm/?utm_source=ig_web_copy_link'
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />
            <p className="post-p">
                A kérvényt <a href="https://www.change.org/p/pornhub-justice-for-mia-khalifa">itt</a> tudjátok aláírni.
            </p>
            <h4 className="post-h">
                A cikk a következő kártyákat inspirálta:
            </h4>
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
    );
}

// Export component.
export default PostJuly;