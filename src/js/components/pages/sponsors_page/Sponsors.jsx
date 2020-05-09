// Import ReactJS module.
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCameraRetro, faPiggyBank, faCommentDots, faCopy, faBeer, faShoppingCart,
  faFileSignature, faPalette, faTrashAlt, faWrench, faHashtag
} from '@fortawesome/free-solid-svg-icons'

import cobblerIconResource from "./../../../../img/sponsors/card_backs/cobbler.png";
import peakyIconResource from "./../../../../img/sponsors/card_backs/peaky.png";
import viztoronyIconResource from "./../../../../img/sponsors/card_backs/viztorony.jpg";
import beersLayoutSpacer from "./../../../../img/sponsors/beers.jpg";
import barBlackLayoutSpacer from "./../../../../img/sponsors/bar_black.jpg";
import barBrownLayoutSpacer from "./../../../../img/sponsors/bar_brown.jpg";
import kingLayoutSpacer from "./../../../../img/sponsors/king.jpg";
import whiskeyLayoutSpacer from "./../../../../img/sponsors/whiskey.jpg";

/**
 * Sponsors of the game.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language.
 */
const Sponsors = props => {

  if (props.currentLanguage === "") {
    props.selectEnglish();
  }

  return (
    <Container fluid className="sponsors-container">
      <Row className="sponsors-how-row">
        <img src={beersLayoutSpacer} className="background-layout-spacer" />
        <Col className="absolute-position">{props.i18n.t("sponsors.howToBeSponsor")}</Col>
      </Row>
      <Row className="sponsors-100-beers-row">
        <Col sm="12">{props.i18n.t("sponsors.pay100Beers")}</Col>
      </Row>
      <Row className="sponsors-why-row">
        <img src={barBlackLayoutSpacer} className="background-layout-spacer" />
        <Col className="absolute-position">{props.i18n.t("sponsors.whyToBeSponsor")}</Col>
      </Row>
      <Row className="sponsors-why-logos-row">
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faCameraRetro} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.getPhoto")}</div>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faPiggyBank} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.getListed")}</div>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faCopy} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.get5Cards")}</div>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faCommentDots} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.chooseQuestion")}</div>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faBeer} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.chooseBackside")}</div>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faShoppingCart} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.loseCards")}</div>
        </Col>
      </Row>
      <Row className="owner-how-row">
        <img src={kingLayoutSpacer} className="background-layout-spacer" />
        <Col className="absolute-position">{props.i18n.t("sponsors.howToBeOwner")}</Col>
      </Row>
      <Row className="owner-contact-me-row">
        <Col className="absolute-position">{props.i18n.t("sponsors.contactMe")}</Col>
      </Row>
      <Row className="owner-why-row">
        <img src={barBrownLayoutSpacer} className="background-layout-spacer" />
        <Col className="absolute-position">{props.i18n.t("sponsors.whyToBeOwner")}</Col>
      </Row>
      <Row className="sponsors-why-logos-row">
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faFileSignature} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.chooseNameAndLogo")}</div>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faPalette} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.chooseTheme")}</div>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faBeer} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.chooseBackside")}</div>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faTrashAlt} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.addAndRemoveQuestions")}</div>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faHashtag} className="sponsor-logos" /><br />
          <a href='https://www.instagram.com/ivosjatek.hu/' target="_blank">
            <div className="sponsor-reason">{props.i18n.t("sponsors.instagram")}</div>
          </a>
        </Col>
        <Col xs="12" sm="6" md="4">
          <FontAwesomeIcon icon={faWrench} className="sponsor-logos" /><br />
          <div className="sponsor-reason">{props.i18n.t("sponsors.technicalSupport")}</div>
        </Col>
      </Row>
      <Row className="current-sponsors-row">
        <img src={whiskeyLayoutSpacer} className="background-layout-spacer" />
        <Col className="absolute-position">{props.i18n.t("sponsors.currentSponsors")}</Col>
      </Row>
      <Row className="sponsor-cards-row">
          <div className="sponsor-card peakybarbers">
            <img src={peakyIconResource} />
          </div>
          <div className="sponsor-card viztorony">
            <img src={viztoronyIconResource} />
          </div>
          <div className="sponsor-card georgecobbler">
            <img src={cobblerIconResource} />
          </div>
      </Row>
    </Container>
  );
}

// Export component.
export default Sponsors;