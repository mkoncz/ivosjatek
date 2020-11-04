// Import ReactJS module.
import React, { Component } from "react";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";
import SourceDetail from "../components/sources-page/Source";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * The page contains the list of used sources.
 */
export default class Sources extends Component {

  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.sources")}
          desc={t("desc.sources")}
          url={"https://ivosjatek.hu/sources"}
        />
        <NavBar />
        <div className="page-frame">
          <h4>{t("source.sources_title")}:</h4>
          <ul>
            <SourceDetail
              localizedName={t("source.source_cocktail")}
              sourceURL="https://www.onlinewebfonts.com/icon/480147"
              sourceName="Icon Fonts"
              licenceURL="https://creativecommons.org/licenses/by/3.0/"
              licenceType="CC BY 3.0"
            />
            <SourceDetail
              localizedName={t("source.source_hu_flag")}
              sourceURL="https://www.flickr.com/photos/80497449@N04/7378164364"
              sourceName="Nicolas Raymond"
              licenceURL="https://creativecommons.org/licenses/by/2.0/"
              licenceType="CC BY 2.0"
            />
            <SourceDetail
              localizedName={t("source.source_en_flag")}
              sourceURL="https://www.publicdomainpictures.net/hu/view-image.php?image=136202"
              sourceName="Dawn Hudson"
              licenceURL="https://creativecommons.org/publicdomain/zero/1.0/"
              licenceType="CC BY 1.0"
            />
            <SourceDetail
              localizedName={t("source.source_18")}
              sourceURL="https://www.shareicon.net/cinema-adult-number-age-movies-shapes-711363"
              sourceName="SHAREICON.NET"
              licenceURL="https://www.shareicon.net/about"
              licenceType="Flaticon Basic Licence"
            />
            <SourceDetail
              localizedName={"Animate.css " + t("source.library")}
              sourceURL="https://daneden.github.io/animate.css/"
              sourceName="Daniel Eden"
              licenceURL="https://github.com/daneden/animate.css/blob/master/LICENSE"
              licenceType="MIT Licence"
            />
            <SourceDetail
              localizedName={t("source.source_king")}
              sourceURL="https://www.peakpx.com/478241/king-on-robe-statue"
              sourceName="PEAKPX"
              licenceURL="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
              licenceType="CC0 1.0 Universal"
            />
            <SourceDetail
              localizedName={t("source.source_bottles")}
              sourceURL="https://www.peakpx.com/581703/2-brown-label-bottles"
              sourceName="PEAKPX"
              licenceURL="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
              licenceType="CC0 1.0 Universal"
            />
            <SourceDetail
              localizedName={t("source.source_bar_v1")}
              sourceURL="https://www.peakpx.com/478886/bar-desk"
              sourceName="PEAKPX"
              licenceURL="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
              licenceType="CC0 1.0 Universal"
            />
            <SourceDetail
              localizedName={t("source.source_bar_v2")}
              sourceURL="https://www.peakpx.com/562004/bar-store-set"
              sourceName="PEAKPX"
              licenceURL="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
              licenceType="CC0 1.0 Universal"
            />
            <SourceDetail
              localizedName={t("source.source_whiskey")}
              sourceURL="https://pixabay.com/photos/alcohol-party-style-drink-1961542/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Pixabay Licence"
            />
            <SourceDetail
              localizedName={t("source.drinking_game_images")}
              sourceURL="https://www.pexels.com"
              sourceName="PEXEL"
              licenceURL="https://www.pexels.com/license/"
              licenceType="PEXELS Licence"
            />
          </ul>
        </div>
      </div>
    );
  }

}