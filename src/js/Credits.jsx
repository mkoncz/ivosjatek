import React from 'react';

const Credits = (props) => {
  return (
   <div className="credits-frame">
     <h3>{props.i18n.t("credits.contact")}</h3>
     <p>matthewkoncy@gmail.com</p>
      <h3>{props.i18n.t("credits.source")}</h3>
      <div>{props.i18n.t("credits.source_cocktail")}<a href="https://www.onlinewebfonts.com/icon/480147">Icon Fonts</a>{props.i18n.t("credits.licence")} <a href='https://creativecommons.org/licenses/by/2.0/'>CC BY 3.0</a>.</div> 
      <div>{props.i18n.t("credits.source_hu_flag")}<a href="https://www.flickr.com/photos/80497449@N04/7378164364"> Nicolas Raymond</a>{props.i18n.t("credits.licence")} <a href='https://creativecommons.org/licenses/by/2.0/'>CC BY 2.0</a>.</div>
      <div>{props.i18n.t("credits.source_en_flag")}<a href="https://www.publicdomainpictures.net/hu/view-image.php?image=136202"> Dawn Hudson</a>{props.i18n.t("credits.licence")}<a href='https://creativecommons.org/publicdomain/zero/1.0/'>CC BY 1.0</a>.</div>
   </div>
  );
}

export default Credits;
