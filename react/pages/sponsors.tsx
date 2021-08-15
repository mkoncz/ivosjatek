// Import React modules.
import React, { Component } from "react";

// Import Next modules.
import Link from 'next/link';

// Import React version of Bootstap library.
import { Container, Row, Col } from "reactstrap";

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
          <div className="animated bounceInUp">
            <Row className="current-sponsors-row">
              <Col className="absolute-position">{t("sponsors.currentSponsors")}</Col>
            </Row>
            <Row className="sponsor-cards-row">
              <Link href="https://csillagkepunk.hu">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-card csillag">
                    <img src="/img/card_backs/csillagok.png" alt="" />
                  </div>
                </a>
              </Link>
              <Link href="https://www.instagram.com/peakybarbersofficial">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-card peakybarbers">
                    <img src="/img/card_backs/peaky.png" alt="" />
                  </div>
                </a>
              </Link>
              <Link href="https://www.instagram.com/nagyerdeiviztorony">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-card viztorony">
                    <img src="/img/card_backs/viztorony.jpg" alt="" />
                  </div>
                </a>
              </Link>
              <Link href="https://www.instagram.com/georgecobbler">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-card cobbler">
                    <img src="/img/card_backs/cobbler.png" alt="" />
                  </div>
                </a>
              </Link>
              <Link href="https://www.facebook.com/dugulaselharitas.balkanybaneskornyeken">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-card dugulasklinika">
                    <img src="/img/card_backs/dugulasklinika.png" alt="" />
                  </div>
                </a>
              </Link>
              <Link href="https://hu.wikipedia.org/wiki/%C3%89p%C3%BClet">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-card anonim">
                    <img src="/img/card_backs/anonim.png" alt="" />
                  </div>
                </a>
              </Link>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}