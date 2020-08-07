// Import ReactJS module.
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCameraRetro, faPiggyBank, faCommentDots, faCopy, faBeer, faShoppingCart,
  faFileSignature, faPalette, faTrashAlt, faWrench, faHashtag
} from "@fortawesome/free-solid-svg-icons"

// Import image resources.
import cobblerIconResource from "./../../../../img/card_backs/cobbler.png";
import peakyIconResource from "./../../../../img/card_backs/peaky.png";
import viztoronyIconResource from "./../../../../img/card_backs/viztorony.jpg";
import beersImageResource from "./../../../../img/sponsors_page/beers.jpg";
import barBlackImageResource from "./../../../../img/sponsors_page/bar_black.jpg";
import barBrownImageResource from "./../../../../img/sponsors_page/bar_brown.jpg";
import kingImageResource from "./../../../../img/sponsors_page/king.jpg";
import whiskeyImageResource from "./../../../../img/sponsors_page/whiskey.jpg";


// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

/**
 * Sponsors of the game.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language. Changing the currentLanguage property triggers an update at the language change.
 * @param {function} props.reloadLanguage Changes the language of the page.
 */
export default class Sponsors extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.reloadLanguage(this.props.currentLanguage);
  }

  setLoaded = () => {
    this.setState({
      loaded: true
    })
  }


  render() {
    return (
      <Container fluid className="sponsors-container">
        <Helmet>
          <title> {this.props.i18n.t("nav.sponsors")} | {this.props.i18n.t("nav.title")}</title>
          <meta name="description" content={this.props.i18n.t("desc.sponsors")} />
          <link rel="canonical" href={`https://ivosjatek.hu/${this.props.currentLanguage === "en" ? "en/" : ""}sponsors`} />
          <meta name="twitter:title" content={`${this.props.i18n.t("nav.sponsors")}`} />
          <meta name="twitter:description" content={this.props.i18n.t("desc.sponsors")} />
          <meta property="og:type" content="website"/>
          <meta property="og:url" content={`https://ivosjatek.hu/${this.props.currentLanguage === "en" ? "en/" : ""}sponsors`} />
          <meta property="og:title" content={`${this.props.i18n.t("nav.sponsors")} | ${this.props.i18n.t("nav.title")}`} />
          <meta property="og:description" content={this.props.i18n.t("desc.sponsors")} />
          <meta property="og:locale" content={this.props.currentLanguage === "en" ? "en_US" : "hu_HU"} />
        </Helmet>
        <div className={`${this.state.loaded ? "" : "hidden"}`}>
          <Row className="sponsors-how-row">
            <img src={beersImageResource} className="background-layout-spacer" onLoad={this.setLoaded} alt="" />
            <Col className="absolute-position">{this.props.i18n.t("sponsors.howToBeSponsor")}</Col>
          </Row>
          <Row className="sponsors-100-beers-row">
            <Col sm="12">{this.props.i18n.t("sponsors.pay100Beers")}</Col>
          </Row>
          <Row className="sponsors-why-row">
            <img src={barBlackImageResource} className="background-layout-spacer" alt="" />
            <Col className="absolute-position">{this.props.i18n.t("sponsors.whyToBeSponsor")}</Col>
          </Row>
          <Row className="sponsors-why-logos-row">
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faCameraRetro} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.getPhoto")}</div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faPiggyBank} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.getListed")}</div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faCopy} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.get5Cards")}</div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faCommentDots} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.chooseQuestion")}</div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faBeer} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.chooseBackside")}</div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faShoppingCart} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.loseCards")}</div>
            </Col>
          </Row>
          <Row className="owner-how-row">
            <img src={kingImageResource} className="background-layout-spacer" alt="" />
            <Col className="absolute-position">{this.props.i18n.t("sponsors.howToBeOwner")}</Col>
          </Row>
          <Row className="owner-contact-me-row">
            <Col className="absolute-position">{this.props.i18n.t("sponsors.contactMe")}</Col>
          </Row>
          <Row className="owner-why-row">
            <img src={barBrownImageResource} className="background-layout-spacer" alt="" />
            <Col className="absolute-position">{this.props.i18n.t("sponsors.whyToBeOwner")}</Col>
          </Row>
          <Row className="sponsors-why-logos-row">
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faFileSignature} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.chooseNameAndLogo")}</div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faPalette} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.chooseTheme")}</div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faBeer} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.chooseBackside")}</div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faTrashAlt} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.addAndRemoveQuestions")}</div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faHashtag} className="sponsor-logos" /><br />
              <a href="https://www.instagram.com/ivosjatek.hu/" target="_blank" rel="noopener noreferrer">
                <div className="sponsor-reason">{this.props.i18n.t("sponsors.instagram")}</div>
              </a>
            </Col>
            <Col xs="12" sm="6" md="4">
              <FontAwesomeIcon icon={faWrench} className="sponsor-logos" /><br />
              <div className="sponsor-reason">{this.props.i18n.t("sponsors.technicalSupport")}</div>
            </Col>
          </Row>
          <Row className="current-sponsors-row">
            <img src={whiskeyImageResource} className="background-layout-spacer" alt="" />
            <Col className="absolute-position">{this.props.i18n.t("sponsors.currentSponsors")}</Col>
          </Row>
          <Row className="sponsor-cards-row">
            <a href="https://www.instagram.com/peakybarbersofficial" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card peakybarbers">
                <img src={peakyIconResource} alt="" />
              </div>
            </a>
            <a href="https://www.instagram.com/nagyerdeiviztorony" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card viztorony">
                <img src={viztoronyIconResource} alt="" />
              </div>
            </a>
            <a href="https://www.instagram.com/georgecobbler" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card cobbler">
                <img src={cobblerIconResource} alt="" />
              </div>
            </a>
          </Row>
        </div>
      </Container>
    );
  }
}