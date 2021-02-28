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
 * 
 * 
 *  <CustomHead
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
            <SourceDetail
              localizedName={t("source.jenga")}
              sourceURL="https://www.flaticon.com/free-icon/jenga_857232"
              sourceName="Pause08"
              licenceURL="https://www.freepikcompany.com/legal#nav-flaticon"
              licenceType="Flaticon License"
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
 * 
 */
export default class Car extends Component {

  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        Kedves Érdeklődők!
        <br/>
        <br/>
        Eladóvá vált szép állapotú, 2007-es, fekete Honda Civic FN2 Type-R-ünk.
        <br/>
        <br/>
        Az autó Magyarországon lett forgalomba hozva.
        Eddigi élete alatt 205e km-t futott.
        <br/>
        <br/>
        Az oldalsó és hátsó ablakok papírozott sötétítést kaptak (Skyfol).
        <br/>
        <br/>
        Ami jár az autóhoz:
        <br/>- jó állapotú téli és nyári gumi szett felnivel (17"/18")
        <br/>- Pioneer SPH-DA230DAB fejegység, 2DIN-es beépítő keret, adapterek (CarPlay, Android Auto, USB, Bluetooth)
        <br/>- igény esetén egy iPhone 5s, ami a médiaegységet irányítja (Spotify, Waze, Google Maps, Apple Maps, online rádiók, Play Music, YoutubeMusic, stb)
        <br/> - eredeti rádió - dobozban
        <br/> - pótkerék
        <br/> - emelő, vészjelző háromszög, 1l tartalékolaj, elsősegélydoboz, indítókábel, izzókészlet, fényvisszaverő mellény
        <br/>
        <br/>
        Az autó 2019. január 25. óta áll a tulajdonunkban.
        <br/>
        <br/>
        Ezidő alatt próbáltuk a legtöbb törődést megadni neki és a lehetséges hibák első gyanújára szerelőhöz vinni.
        <br/>
        <br/>
        A nálunk töltött idő alatt a klímakompresszor, axiálok, toronycsapágyak, szilentek és a jobb első lengőkar lettek cserélve.
        <br/>
        <br/>
        <br/>
        Az autó állapota/fennmaradó hibái a képeken láthatóak:
        <br/>- repedt irányjelzőburkolat a jobb oldali tükrön
        <br/>- hűtőrács fúrási heg (a Type-R logó helye)
        <br/>- néha előforduló pixelhiba a klíma információk paneljén
        <br/>- a nyári felni festése néhány helyen pattogzik
        <br/>- az egyik nyári felni meg van padkázva (a gumiszerviz vizsgálata alapján nincs strukturális sérülése sem a guminak, sem a felninek)
        <br/>
        <br/>
        <br/>
        Alvázszám: SHHFN23607U003517 <br/>
        Rendszám: KRP-124
        <br/>
        <br/>
        <img width="100%" src={`/img/car/1.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/2.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/3.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/4.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/5.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/6.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/7.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/8.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/9.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/10.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/11.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/12.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/13.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/14.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/15.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/16.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/17.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/18.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/19.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/20.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/21.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/22.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/23.jpg`}></img> <br/><br/>
        <img width="100%"src={`/img/car/24.jpg`}></img> <br/><br/>
      </div>
    );
  }

}