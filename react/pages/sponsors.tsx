// Import React modules.
import React, { Component } from "react";

// Import React version of Bootstap library.
import { Container, Row, Col } from "reactstrap";

// Import module for cookie handling.
import Cookies from "universal-cookie";

// Import FA modules.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCameraRetro, faPiggyBank, faCommentDots, faCopy, faBeer, faShoppingCart,
  faFileSignature, faPalette, faTrashAlt, faWrench, faHashtag
} from "@fortawesome/free-solid-svg-icons"

// Import components.
import NavBar from "../components/navbar/NavBar";
import CustomHead from "../components/head/CustomHead";

// Import i18n functions.
import { t, initLanguageCookie } from "../i18n";

/**
 * Sponsors of the game.
 */
export default class Sponsors extends Component {

  constructor(props) {
    super(props);
    initLanguageCookie();
  }

  render() {
    return (
      <div>
        <CustomHead
          title={t("nav.sponsors")}
          desc={t("desc.sponsors")}
          url={"https://ivosjatek.hu/sponsors"}
        />
        <NavBar />
        <Container fluid className="sponsors-container">
          <div>
            <Row className="sponsors-how-row">
              <img src="/img/sponsors_page/beers.jpg" className="background-layout-spacer" alt="" />
              <Col className="absolute-position">{t("sponsors.howToBeSponsor")}</Col>
            </Row>
            <Row className="sponsors-100-beers-row">
              <Col sm="12">{t("sponsors.pay100Beers")}</Col>
            </Row>
            <Row className="sponsors-why-row">
              <img src="/img/sponsors_page/bar_black.jpg" className="background-layout-spacer" alt="" />
              <Col className="absolute-position">{t("sponsors.whyToBeSponsor")}</Col>
            </Row>
            <Row className="sponsors-why-logos-row">
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faCameraRetro} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.getPhoto")}</div>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faPiggyBank} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.getListed")}</div>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faCopy} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.get5Cards")}</div>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faCommentDots} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.chooseQuestion")}</div>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faBeer} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.chooseBackside")}</div>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faShoppingCart} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.loseCards")}</div>
              </Col>
            </Row>
            <Row className="owner-how-row">
              <img src="/img/sponsors_page/king.jpg" className="background-layout-spacer" alt="" />
              <Col className="absolute-position">{t("sponsors.howToBeOwner")}</Col>
            </Row>
            <Row className="owner-contact-me-row">
              <Col className="absolute-position">{t("sponsors.contactMe")}</Col>
            </Row>
            <Row className="owner-why-row">
              <img src="/img/sponsors_page/bar_brown.jpg" className="background-layout-spacer" alt="" />
              <Col className="absolute-position">{t("sponsors.whyToBeOwner")}</Col>
            </Row>
            <Row className="sponsors-why-logos-row">
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faFileSignature} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.chooseNameAndLogo")}</div>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faPalette} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.chooseTheme")}</div>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faBeer} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.chooseBackside")}</div>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faTrashAlt} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.addAndRemoveQuestions")}</div>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faHashtag} className="sponsor-logos" /><br />
                <a href="https://www.instagram.com/ivosjatek.hu/" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-reason">{t("sponsors.instagram")}</div>
                </a>
              </Col>
              <Col xs="12" sm="6" md="4">
                <FontAwesomeIcon icon={faWrench} className="sponsor-logos" /><br />
                <div className="sponsor-reason">{t("sponsors.technicalSupport")}</div>
              </Col>
            </Row>
            <Row className="current-sponsors-row">
              <img src="/img/sponsors_page/whiskey.jpg" className="background-layout-spacer" alt="" />
              <Col className="absolute-position">{t("sponsors.currentSponsors")}</Col>
            </Row>
            <Row className="sponsor-cards-row">
              <a href="https://www.instagram.com/peakybarbersofficial" target="_blank" rel="noopener noreferrer">
                <div className="sponsor-card peakybarbers">
                  <img src="/img/card_backs/peaky.png" alt="" />
                </div>
              </a>
              <a href="https://www.instagram.com/nagyerdeiviztorony" target="_blank" rel="noopener noreferrer">
                <div className="sponsor-card viztorony">
                  <img src="/img/card_backs/viztorony.jpg" alt="" />
                </div>
              </a>
              <a href="https://www.instagram.com/georgecobbler" target="_blank" rel="noopener noreferrer">
                <div className="sponsor-card cobbler">
                  <img src="/img/card_backs/cobbler.png" alt="" />
                </div>
              </a>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}