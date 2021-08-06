// Import ReactJS module.
import React, { Component } from "react";

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
        <div className="page-frame black-background">
          <h4>{t("source.sources_title")}:</h4>
          <ul>
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
              localizedName={"Animate.css " + t("source.library")}
              sourceURL="https://daneden.github.io/animate.css/"
              sourceName="Daniel Eden"
              licenceURL="https://github.com/daneden/animate.css/blob/master/LICENSE"
              licenceType="MIT Licence"
            />
            <SourceDetail
              localizedName={t("source.source_bar_v1")}
              sourceURL="https://www.peakpx.com/478886/bar-desk"
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
            <SourceDetail
              localizedName={t("source.jenga")}
              sourceURL="https://www.flaticon.com/free-icon/jenga_857232"
              sourceName="Pause08"
              licenceURL="https://www.freepikcompany.com/legal#nav-flaticon"
              licenceType="Flaticon License"
            />
            <SourceDetail
              localizedName={t("source.font")}
              sourceURL="https://www.1001fonts.com/zig-font.html#license"
              sourceName="1001fonts"
              licenceURL="https://www.1001fonts.com/licenses/general-font-usage-terms.html"
              licenceType="1001Fonts General Font Usage Terms"
            />
          </ul>
          <h5>{t("nav.games")}:</h5>
          <ul>
            <li>
              <a href="https://www.glamour.hu/geletstilus/10-szorakoztato-ivos-jatek-amit-a-kovetkezo-hazibuliban-ki-kell-probalnod-36291">https://www.glamour.hu/geletstilus/10-szorakoztato-ivos-jatek-amit-a-kovetkezo-hazibuliban-ki-kell-probalnod-36291</a>
            </li>
            <li>
              <a href="https://www.nyu.hu/cikk/par_ivos_jatek_ami_feldobhat_egy_lapos_bulit">https://www.nyu.hu/cikk/par_ivos_jatek_ami_feldobhat_egy_lapos_bulit</a>
            </li>
            <li>
              <a href="https://player.hu/eletmod/gasztro/ivos-jatekok">https://player.hu/eletmod/gasztro/ivos-jatekok</a>
            </li>
            <li>
              <a href="https://www.scoopwhoop.com/inothernews/fun-drinking-games">https://www.scoopwhoop.com/inothernews/fun-drinking-games</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}