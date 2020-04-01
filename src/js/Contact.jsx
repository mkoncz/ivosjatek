// Import ReactJS module.
import React from 'react';

// Import Source component.
import Source from './Source';

/**
 * The page contains the contact e-mail address of the creator and the list of used sources.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 */
const Contact = props => {
  return (
    <div className="contact-frame">
      <h3>{props.i18n.t("contact.contact")}</h3>
      <p>matthewkoncy@gmail.com</p>
      <h3>{props.i18n.t("contact.sources")}:</h3>
      <Source
        i18n={props.i18n}
        localizedName={props.i18n.t("contact.source_cocktail")}
        sourceURL="https://www.onlinewebfonts.com/icon/480147"
        sourceName="Icon Fonts"
        licenceURL="https://creativecommons.org/licenses/by/3.0/"
        licenceType="CC BY 3.0"
      />
      <Source
        i18n={props.i18n}
        localizedName={props.i18n.t("contact.source_hu_flag")}
        sourceURL="https://www.flickr.com/photos/80497449@N04/7378164364"
        sourceName="Nicolas Raymond"
        licenceURL="https://creativecommons.org/licenses/by/2.0/"
        licenceType="CC BY 2.0"
      />
      <Source
        i18n={props.i18n}
        localizedName={props.i18n.t("contact.source_en_flag")}
        sourceURL="https://www.publicdomainpictures.net/hu/view-image.php?image=136202"
        sourceName="Dawn Hudson"
        licenceURL="https://creativecommons.org/publicdomain/zero/1.0/"
        licenceType="CC BY 1.0"
      />
      <Source
        i18n={props.i18n}
        localizedName={"Animate.css "+ props.i18n.t("contact.library")}
        sourceURL="https://daneden.github.io/animate.css/"
        sourceName="Daniel Eden"
        licenceURL="https://github.com/daneden/animate.css/blob/master/LICENSE"
        licenceType="MIT Licence"
      />
    </div>
  );
}

// Export component.
export default Contact;