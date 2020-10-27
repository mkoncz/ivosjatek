// Import ReactJS modules.
import React from "react";
import Head from 'next/head';
import { t } from "../../i18n";
import Cookies from "universal-cookie";

/**
 * List of the rules.
 */
const CustomHead = props => {

  //<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  //<link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" /> <!-- 192x192 -->
  //<meta name="twitter:image" content="https://ivosjatek.hu/yellow_logo.png" />
  //<meta property="og:image" content="https://ivosjatek.hu/yellow_logo.png" />
  //<script async src="https://www.googletagmanager.com/gtag/js?id=UA-168599391-1"></script>
  //<script async src="//www.instagram.com/embed.js"></script>
  //<script async src="//embed.redditmedia.com/widgets/platform.js" charset="UTF-8"></script> 
  //analitics
  /*
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "UA-168599391-1");
  </script>

   <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Ivós Játék",
        "url": "https://ivosjatek.hu",
        "address": "",
        "sameAs": [
          "https://www.instagram.com/ivosjatek.hu",
          "https://www.linkedin.com/company/ivosjatek",
          "https://twitter.com/ivosjatek",
          "https://www.facebook.com/mate.ko.92167"
        ]
      }
    </script>
  */
 
  let cookies = new Cookies();
  let lang = cookies.get("lang") === "hu" ? "hu_HU" : "en_US";

  return (
    <Head>
      <meta charset="utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="home" href="https://ivosjatek.hu" />
      <link rel="canonical" href="https://ivosjatek.hu" />
      
      <title>{props.title} | {t("nav.title")}</title>
      <meta name="description" content={props.desc} />

      <link rel="shortcut icon" href="/static/favicon.ico" />

      <meta name="twitter:creator" content="@ivosjatek" />
      <meta name="twitter:title" content={`${t(props.title)} | ${t("nav.title")}`} />
      <meta name="twitter:description" content={props.desc} />
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:site" content="@ivosjatek" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ivosjatek.hu/" />
      <meta property="og:title" content={`${props.title} | ${t("nav.title")}`} />
      <meta property="og:description" content={props.desc}  />
      <meta property="og:locale" content={lang} />
    </Head>
  );
}

//default props

// Export component.
export default CustomHead;