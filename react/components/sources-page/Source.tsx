// Import React module.
import React from "react";

// Import Next modules.
import Link from "next/link";

// Import translate function.
import { t } from "../../i18n";

// Interfaces for props.
interface SourceDetailProps {
  localizedName: string;
  sourceURL: string;
  sourceName: string;
  licenceType: string;
  licenceURL: string;
}

/**
 * The page contains the contact e-mail address of the creator and the list of used sources.
 *
 * @param {string} props.localizedName Name of used resource.
 * @param {string} props.sourceURL Source URL of the used resource.
 * @param {string} props.sourceName Name of the creator.
 * @param {string} props.licenceType Usage rights of the resource.
 * @param {string} props.licenceURL URL of the licence type.
 */
const SourceDetail = (props: SourceDetailProps) => {
  return (
    <li>
      {`${props.localizedName} ${t("source.source")}: `}
      <Link href={props.sourceURL}>
        <a>{props.sourceName}</a>
      </Link>
      {`. ${t("source.licence")}: `}
      <Link href={props.licenceURL}>
        <a>{props.licenceType}</a>
      </Link>
      .
    </li>
  );
};

// Export module.
export default SourceDetail;
