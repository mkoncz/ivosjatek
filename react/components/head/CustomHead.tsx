// Import React and Next.js modules.
import React from "react";
import Head from "next/head";

// Import translate function.
import { t, cookies } from "../../i18n";

// Interface for props.
interface CustomHeadProps {
  imgPath?: string;
  title: string;
  url: string;
  desc: string;
  hasInstagram?: boolean;
  hasReddit?: boolean;
}

/**
 * Component for custom head element.
 */
const CustomHead = (props: CustomHeadProps) => {
  let lang = cookies.get("lang") === "en" ? "en_US" : "hu_HU";

  let imgPath =
    props.imgPath != null && props.imgPath.startsWith("/")
      ? "https://ivosjatek.hu" + props.imgPath
      : props.imgPath;

  let title = props.title + " | " + t("nav.title");

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="home" href="https://ivosjatek.hu" />
      <link rel="canonical" href={props.url} />

      <title>{title}</title>
      <meta name="description" content={props.desc} />

      <link rel="shortcut icon" href="/img/favicon.ico" />
      <link rel="apple-touch-icon" href="/img/favicon.ico" />

      <meta name="twitter:creator" content="@ivosjatek" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={props.desc} />
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:site" content="@ivosjatek" />
      <meta
        name="twitter:image"
        content={
          props.imgPath == null
            ? "https://ivosjatek.hu/img/yellow_logo.png"
            : imgPath
        }
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:locale" content={lang} />
      <meta
        property="og:image"
        content={
          props.imgPath == null
            ? "https://ivosjatek.hu/img/yellow_logo.png"
            : imgPath
        }
      />

      {props.hasInstagram ? (
        <script
          async
          src="//embed.redditmedia.com/widgets/platform.js"
          charSet="UTF-8"
        ></script>
      ) : null}
      {props.hasReddit ? (
        <script async src="//www.instagram.com/embed.js"></script>
      ) : null}

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-168599391-1"
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
                {
                  "@context":"https://schema.org/",
                  "@type": "Organization",
                  "name": "Ivós Játék",
                  "url": "https://ivosjatek.hu",
                  "sameAs": [
                    "https://www.instagram.com/ivosjatek.hu",
                    "https://www.linkedin.com/company/ivosjatek",
                    "https://twitter.com/ivosjatek",
                    "https://www.facebook.com/ivosjatek.hu"
                  ]
                }
              `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag("js", new Date());
                gtag("config", "UA-168599391-1", {cookie_flags: "SameSite=None;Secure"});
              `,
        }}
      />
    </Head>
  );
};

// Export component.
export default CustomHead;
