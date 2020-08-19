// Import ReactJS module.
import React from "react";

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

/**
 * The page contains the list of posts.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 */
const Posts = props => {
  return (
    <div className="page-frame">
      <Helmet>
        <title>{props.i18n.t("nav.posts")} | {props.i18n.t("nav.title")}</title>
        <meta name="description" content={props.i18n.t("desc.posts")} />
        <link rel="canonical" href="https://ivosjatek.hu/posts" />
        <meta name="twitter:title" content={props.i18n.t("nav.posts")} />
        <meta name="twitter:description" content={props.i18n.t("desc.posts")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ivosjatek.hu/posts" />
        <meta property="og:title" content={`${props.i18n.t("nav.posts")} | ${props.i18n.t("nav.title")}`} />
        <meta property="og:description" content={props.i18n.t("desc.posts")} />
        <meta property="og:locale" content={props.currentLanguage === "en" ? "en_US" : "hu_HU"} />
      </Helmet>
      <h1>{props.i18n.t("nav.posts")}</h1>

      <a href="/p/felnottfilmes-keri-a-videoi-torleset">
        <img src="https://instagram.fbud4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91972246_115766546750301_8183436718060852579_n.jpg?_nc_ht=instagram.fbud4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=fWhQs2hcIxgAX8oec7m&oh=88b32a6890cff1219e3a4dec4e2d09ca&oe=5F47580B"
          className="post-thumbnail" alt={props.i18n.t("nav.posts")} />
        <div className="post-thumbnail-title-container" >
          <h4 className="post-thumbnail-title">
            Majdnem kétmillióan kérik, hogy távolítsák el a netről a világ legismertebb pornósának videóit
          </h4>
        </div>
      </a>
      <div className="post-separator"></div>
      <a className="post-a" href="/p/ketrecharcos-lesz-ukrajna-legnagyobb-mellu-noje">
        <img src="https://instagram.fbud4-1.fna.fbcdn.net/v/t51.2885-15/e35/103877492_298962061477741_2945378977191134397_n.jpg?_nc_ht=instagram.fbud4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Qe3_2q5STXkAX-bLSSN&oh=d2b91f5f890eff4e7fbbdedc7a046419&oe=5F47B146"
          className="post-thumbnail" alt={props.i18n.t("nav.posts")} />
        <div className="post-thumbnail-title-container" >
          <h4 className="post-thumbnail-title">
            MMA harcosnak áll Ukrajna legnagyobb mellű nője
          </h4>
        </div>
      </a>
      <div className="post-separator"></div>
      <a className="post-a" href="/p/biztositast_kotott_a_peniszere">
        <img src="https://instagram.fbud4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/109352985_2660633004202600_6221325164259584362_n.jpg?_nc_ht=instagram.fbud4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=sqs7AR79OqcAX8B6bDi&oh=1d4f08de9980ba8f0f1d0bbe456ae197&oe=5F49092F"
          className="post-thumbnail" alt={props.i18n.t("nav.posts")} />
        <div className="post-thumbnail-title-container" >
          <h4 className="post-thumbnail-title">
            1 millió dolláros biztosítást kötött a péniszére a férfi
          </h4>
        </div>
      </a>
      <div className="post-separator"></div>
      <a className="post-a" href="/p/pornosnak-allt-az-autoversenyzono">
        <img src="https://instagram.fbud5-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/103390422_170880257756271_1324934774843271870_n.jpg?_nc_ht=instagram.fbud5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Z0R62PPNWwAAX8t-EC_&oh=a0a337cf51e59f3fc0c5302c0ed5746e&oe=5F51DEFD"
          className="post-thumbnail" alt={props.i18n.t("nav.posts")} />
        <div className="post-thumbnail-title-container" >
          <h4 className="post-thumbnail-title">
            Pornósnak állt az autóversenyzőnő, mert abban sokkal több a pénz
          </h4>
        </div>
      </a>
      <div className="post-separator"></div>
      <a className="post-a" href="/p/megvettek-mia-khalifa-szemuveget">
        <img src="https://instagram.fbud4-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117313314_464886431139434_3748052878640087362_n.jpg?_nc_ht=instagram.fbud4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=n_xYb40bbU0AX8IN_7L&oh=95da63349844fd36ac02ffd1fe490b82&oe=5F64F723"
          className="post-thumbnail" alt={props.i18n.t("nav.posts")} />
        <div className="post-thumbnail-title-container" >
          <h4 className="post-thumbnail-title">
            Elárverezte szemüvegét az expornós Mia Khalifa – a befolyt összeget jótékony célra ajánlotta
          </h4>
        </div>
      </a>
      <div className="post-separator"></div>
      <a className="post-a" href="/p/a-vilag-legdragabb-italai">
        <img src="http://www.gasztromagazin.hu/wp-content/uploads/2017/12/Billionaire-Vodka-Worlds-Most-Expensive-Alcohol-2018.jpg"
          className="post-thumbnail" alt={props.i18n.t("nav.posts")} />
        <div className="post-thumbnail-title-container" >
          <h4 className="post-thumbnail-title">
            A világ legdrágább italai - a királyok, nemesek, mágnások kiváltságai
          </h4>
        </div>
      </a>

    </div>
  );
}

// Export component.
export default Posts;