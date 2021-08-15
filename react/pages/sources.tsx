// Import ReactJS module.
import React, { Component } from "react";

// Import Next modules.
import Link from 'next/link';

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
            <SourceDetail
              localizedName={t("source.synthwave_wallpaper")}
              sourceURL="https://www.artstation.com/kisstheshow"
              sourceName="Márk Koncz"
              licenceURL=""
              licenceType=""
            />
            <SourceDetail
              localizedName={t("source.pixlr_cocktail")}
              sourceURL="https://pixlr.com/stock/details/1001469881-pixel-art-cocktail/"
              sourceName="PIXLR"
              licenceURL="https://pixlr.com/stock/documents/?tab=license-agreement"
              licenceType="FREE"
            />
            <SourceDetail
              localizedName={t("source.pngkit_blue_eyes")}
              sourceURL="https://www.pngkit.com/bigpic/u2t4i1y3y3r5i1y3/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_blue_princess")}
              sourceURL="https://www.pngkit.com/bigpic/u2e6q8w7y3t4o0e6/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_hammer")}
              sourceURL="https://www.pngkit.com/view/u2q8e6t4u2y3o0o0_pixel-thor-hammer-pixel-art-thor-hammer/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_gun")}
              sourceURL="https://www.pngkit.com/downpic/u2e6y3o0u2u2e6r5_sniper-pixel-art-pixel-sniper/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_skull")}
              sourceURL="https://www.pngkit.com/downpic/u2q8r5r5e6q8w7w7_dead-pixel-society-black-and-white-pixel/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_coke")}
              sourceURL="https://www.pngkit.com/view/u2q8t4w7r5w7r5r5_soda-clipart-pixel-art-coca-cola-bottle-pixel/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_brown_anime_girl")}
              sourceURL="https://www.pngkit.com/downpic/u2q8u2w7q8u2i1a9_anime-pixel-art-png-taiga-aisaka-pixel-art/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_brown_anime_girl")}
              sourceURL="https://www.pngkit.com/downpic/u2q8u2w7q8u2i1a9_anime-pixel-art-png-taiga-aisaka-pixel-art/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_cowboy")}
              sourceURL="https://www.pngkit.com/view/u2q8o0y3r5w7q8w7_mccree-pixel-spray-png-overwatch-mccree-pixel-spray/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pnglit_pepe")}
              sourceURL="https://www.pngkit.com/view/u2q8a9o0t4o0a9y3_pepe-pepe-pixel-art/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_sushi")}
              sourceURL="https://www.pngkit.com/downpic/u2q8q8i1y3q8w7a9_report-abuse-transparent-pixel-sushi/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_wood")}
              sourceURL="https://www.pngkit.com/downpic/u2q8e6w7w7t4q8t4_tree-stump-with-axe-pixel-art-tree-trunk/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_fish")}
              sourceURL="https://www.pngkit.com/downpic/u2q8u2u2q8y3a9e6_fish-bowl-with-larry-inside-pesca-pixel-art/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_vampire")}
              sourceURL="https://www.pngkit.com/downpic/u2q8y3q8q8o0o0w7_banner-royalty-free-art-album-on-imgur-vampire/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_car")}
              sourceURL="https://www.pngkit.com/view/u2w7u2e6w7o0a9a9_pixel-car-purple-front-svg-free-stock-car/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_doge")}
              sourceURL="https://www.pngkit.com/downpic/u2t4u2i1q8u2t4y3_pixelated-pixelart-freetouse-doge-pixel-art-paint-icon/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_diamond")}
              sourceURL="https://www.pngkit.com/downpic/u2q8q8u2t4e6r5r5_rainbow-diamond-rainbow-diamond-pixel-art/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_tall_man")}
              sourceURL="https://www.pngkit.com/downpic/u2q8q8u2u2o0u2w7_lebron-james-logo-pixel-art/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_helicopter")}
              sourceURL="https://www.pngkit.com/downpic/u2q8e6o0i1q8o0e6_helicopter-pixel-art/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pngkit_ham")}
              sourceURL="https://www.pngkit.com/downpic/u2q8y3w7u2i1y3a9_ham-pixel-art/"
              sourceName="PNGKIT"
              licenceURL="https://www.pngkit.com/terms/"
              licenceType="free community support"
            />
            <SourceDetail
              localizedName={t("source.pixabay_mario")}
              sourceURL="https://pixabay.com/vectors/blue-game-game-design-1293919/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_o_emoji")}
              sourceURL="https://pixabay.com/vectors/astonished-shocked-smiley-computer-147446/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_pizza")}
              sourceURL="https://pixabay.com/illustrations/pizza-pixel-art-pizza-pixel-art-5068912/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_heart")}
              sourceURL="https://pixabay.com/illustrations/pixel-red-valentine-romantic-4820162/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_among_us")}
              sourceURL="https://pixabay.com/illustrations/pixel-game-among-us-pixel-art-6063246/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_britain")}
              sourceURL="https://pixabay.com/illustrations/pixel-art-flag-uk-britain-6090864/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_pink_wine")}
              sourceURL="https://pixabay.com/illustrations/wine-bottle-of-wine-wine-glass-pink-6124537/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_guitar")}
              sourceURL="https://pixabay.com/illustrations/pixel-mine-art-guitar-music-1562563/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_dino")}
              sourceURL="https://pixabay.com/vectors/dinosaur-pixels-model-square-color-2646038/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_bowl")}
              sourceURL="https://pixabay.com/illustrations/witch-bowl-halloween-pixel-art-6194394/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_orange_wine")}
              sourceURL="https://pixabay.com/illustrations/wine-bottle-wine-glass-orange-flavor-6124540/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pixabay_nut")}
              sourceURL="https://pixabay.com/illustrations/pixel-art-walnut-nut-8bit-retro-1682363/"
              sourceName="PIXABAY"
              licenceURL="https://pixabay.com/service/license/"
              licenceType="Simplified Pixabay License"
            />
            <SourceDetail
              localizedName={t("source.pngegg_ghost")}
              sourceURL="https://www.pngegg.com/en/png-iyoey/"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_kitty")}
              sourceURL="https://www.pngegg.com/en/png-zoojb"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_big_bunny")}
              sourceURL="https://www.pngegg.com/en/png-wloxq"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_carrot")}
              sourceURL="https://www.pngegg.com/en/png-eqwjv"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_christmas")}
              sourceURL="https://www.pngegg.com/en/png-nvecu"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_fight")}
              sourceURL="https://www.pngegg.com/en/png-zcwbz/"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_bomb")}
              sourceURL="https://www.pngegg.com/en/png-phqng"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_letter")}
              sourceURL="https://www.pngegg.com/en/png-ibein"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_pacman")}
              sourceURL="https://www.pngegg.com/en/png-ymaog/"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_tv")}
              sourceURL="https://www.pngegg.com/en/png-yfjki"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_tree")}
              sourceURL="https://www.pngegg.com/en/png-zfsmb/"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_boytears")}
              sourceURL="https://www.pngegg.com/en/png-chruw"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_monkey")}
              sourceURL="https://www.pngegg.com/en/png-zffoo"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_icecream")}
              sourceURL="https://www.pngegg.com/en/png-bvgkt/"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_cat")}
              sourceURL="https://www.pngegg.com/en/png-mwmgk/"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_mushroom")}
              sourceURL="https://www.pngegg.com/en/png-zvfsa"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_donut")}
              sourceURL="https://www.pngegg.com/en/png-nqvfq"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_sport_car")}
              sourceURL="https://www.pngegg.com/en/png-ybqne/"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_cow")}
              sourceURL="https://www.pngegg.com/en/png-eauvb"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.pngegg_food")}
              sourceURL="https://www.pngegg.com/en/png-zcoav"
              sourceName="PNGEGG"
              licenceURL="https://www.pngegg.com/tos"
              licenceType="Non-commercial use"
            />
            <SourceDetail
              localizedName={t("source.vhv_girl")}
              sourceURL="https://www.vhv.rs/viewpic/iooiobb_anime-girl-pixel-art-hd-png-download/"
              sourceName="VHV"
              licenceURL="https://www.vhv.rs/terms/"
              licenceType="Personal use only"
            />
            <SourceDetail
              localizedName={t("source.pngkey_martini")}
              sourceURL="https://www.pngkey.com/maxpic/u2q8o0t4u2o0q8e6/"
              sourceName="PNGKEY"
              licenceURL="https://www.vhv.rs/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_beer")}
              sourceURL="https://www.pngkey.com/maxpic/u2q8o0t4u2o0q8e6/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_phone")}
              sourceURL="https://www.pngkey.com/maxpic/u2y3q8q8o0w7i1y3/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pikpng_icecream_cone")}
              sourceURL="https://www.pikpng.com/pngvi/JbbJRx_pixel-art-a-imprimer-png-download-pixel-art/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_crown")}
              sourceURL="https://www.pikpng.com/pngvi/imbbhhw_crown-yellow-golden-pixel-pixels-freetoedit-pixel-art/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_hp")}
              sourceURL="https://www.pikpng.com/downpngs/ombmbi_harry-potters-scar-parallel-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_fu")}
              sourceURL="https://www.pikpng.com/downpngs/hxJohmi_pixel-art-blackpink-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_kenny")}
              sourceURL="https://www.pikpng.com/downpngs/hhhJowT_septic-sam-pixel-art-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_spider")}
              sourceURL="https://www.pikpng.com/downpngs/wiowbT_tarantula-spider-pixel-art-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_sword")}
              sourceURL="https://www.pikpng.com/downpngs/JmTbRo_894-x-894-6-sword-pixel-art-png/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_blonde_anime_girl")}
              sourceURL="https://www.pikpng.com/downpngs/JRiJJx_anime-sprite-madoka-magica-pixel-art-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_robot")}
              sourceURL="https://www.pikpng.com/downpngs/bJRimT_gurr-from-invader-zim-gir-pixel-art-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_yoda")}
              sourceURL="https://www.pikpng.com/downpngs/hmoJwR_yoda-yoda-pixel-art-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_laugh")}
              sourceURL="https://www.pikpng.com/downpngs/TbhRxo_laughing-crying-emoji-lmao-emoji-pixel-art-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_castle")}
              sourceURL="https://www.pikpng.com/downpngs/TbiimR_castle-castle-pixel-art-png-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_motor")}
              sourceURL="https://www.pikpng.com/downpngs/iRxJbho_pixel-art-motorbike-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_deadpool")}
              sourceURL="https://www.pikpng.com/downpngs/xobmJT_deadpool-pixel-art-pixel-art-deadpool-clipart/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pikpng_unicorn")}
              sourceURL="https://www.pikpng.com/downpngs/hbRhimJ_cute-pixel-art-unicorn-pixel-art-facile-licorne/"
              sourceName="PIKPNG"
              licenceURL="https://www.pikpng.com/ourterms/"
              licenceType="Free, unlimited download."
            />
            <SourceDetail
              localizedName={t("source.pngkey_cloud")}
              sourceURL="https://www.pngkey.com/detail/u2e6y3o0a9r5r5y3_cloud-pixel-png/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_house")}
              sourceURL="https://www.pngkey.com/detail/u2w7t4q8r5y3r5o0_pixel-art-house-house/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_water_gun")}
              sourceURL="https://www.pngkey.com/detail/u2t4y3i1i1r5r5r5_water-gun-rainbow-heart-pixel-art/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_eggplant")}
              sourceURL="https://www.pngkey.com/detail/u2e6y3i1i1i1u2u2_eggplant-eggplant-pixel-art/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_potato")}
              sourceURL="https://www.pngkey.com/detail/u2e6q8r5q8q8o0u2_papas-fritas-pixel-art-cute-food/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_hoe")}
              sourceURL="https://www.pngkey.com/detail/u2w7t4a9e6a9t4a9_hoe-pixel-art/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_cupcake")}
              sourceURL="https://www.pngkey.com/detail/u2q8o0o0w7u2r5y3_fnaf-cupcake-cupcake-fnaf-pixel-art/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_stpatrik")}
              sourceURL="https://www.pngkey.com/detail/u2q8r5i1w7e6q8u2_leprechaun-leprechaun-pixel-art/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_autumn")}
              sourceURL="https://www.pngkey.com/detail/u2q8r5q8u2t4y3e6_autumn-autumn-leaf-pixel-art/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_spaceship")}
              sourceURL="https://www.pngkey.com/download/u2q8a9t4i1o0w7y3_millennium-falcon-millennium-falcon-pixel-art/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngkey_glasses")}
              sourceURL="https://www.pngkey.com/detail/u2w7w7o0o0w7t4o0_pixel-glasses-glasses-pixel-art/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Non-commerial use"
            />
            <SourceDetail
              localizedName={t("source.pngfind_smoke")}
              sourceURL="https://www.pngfind.com/mpng/iRiRhJ_big-smoke-png-big-smoke-pixel-art-transparent/"
              sourceName="PNGKEY"
              licenceURL="https://www.pngkey.com/terms/"
              licenceType="Personal Use Only"
            />
            <SourceDetail
              localizedName={t("source.pixelartmaker_boobs")}
              sourceURL="http://pixelartmaker.com/art/e0cf72653cffa22"
              sourceName="PIXELARTMAKER"
              licenceURL=""
              licenceType=""
            />
          </ul>
          <h5>{t("nav.games")}:</h5>
          <ul>
            <li>
              <Link href="https://www.glamour.hu/geletstilus/10-szorakoztato-ivos-jatek-amit-a-kovetkezo-hazibuliban-ki-kell-probalnod-36291">
                <a>https://www.glamour.hu/geletstilus/10-szorakoztato-ivos-jatek-amit-a-kovetkezo-hazibuliban-ki-kell-probalnod-36291</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.nyu.hu/cikk/par_ivos_jatek_ami_feldobhat_egy_lapos_bulit">
                <a>https://www.nyu.hu/cikk/par_ivos_jatek_ami_feldobhat_egy_lapos_bulit</a>
              </Link>
            </li>
            <li>
              <Link href="https://player.hu/eletmod/gasztro/ivos-jatekok">
                <a>https://player.hu/eletmod/gasztro/ivos-jatekok</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.scoopwhoop.com/inothernews/fun-drinking-games">
                <a>https://www.scoopwhoop.com/inothernews/fun-drinking-games</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}