// Import ReactJS module.
import React from "react";

/**
 * The page contains the contact e-mail address of the creator and the list of used sources.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.localizedName Name of used resource.
 * @param {string} props.sourceURL Source URL of the used resource.
 * @param {string} props.sourceName Name of the creator.
 * @param {string} props.licenceType Usage rights of the resource.
 * @param {string} props.licenceURL URL of the licence type.
 */
const SourceDetail = props => {
  return (
    <li>
      {`${props.localizedName} ${props.i18n.t("source.source")}: `} 
      <a href={props.sourceURL}>{props.sourceName}</a> 
      {`. ${props.i18n.t("source.licence")}: `}
      <a href={props.licenceURL}>{props.licenceType}</a>.
    </li> 
  );
}

// Export module.
export default SourceDetail;
