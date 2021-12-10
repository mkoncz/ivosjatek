// Import React modules.
import React, { Component } from "react";

// Import Next modules.
import Link from "next/link";

// Import React version of Bootstap library.
import { Container, Row, Col } from "reactstrap";

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
        <Container fluid className="sponsors">
          <div className="animated bounceInUp">
            <Row className="sponsors__header">
              {t("sponsors.currentSponsors")}
            </Row>
            <Row className="sponsors__cards">
              <Link href="https://csillagkepunk.hu">
                <a
                  className="sponsors__card_container"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="sponsors__card sponsors__card--csillag">
                    <img
                      className="sponsors__card_image"
                      src="/img/card_backs/csillagok.png"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <Link href="https://www.instagram.com/peakybarbersofficial">
                <a
                  className="sponsors__card_container"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="sponsors__card sponsors__card--peakybarbers">
                    <img
                      className="sponsors__card_image"
                      src="/img/card_backs/peaky.png"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <Link href="https://www.instagram.com/nagyerdeiviztorony">
                <a
                  className="sponsors__card_container"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="sponsors__card sponsors__card--viztorony">
                    <img
                      className="sponsors__card_image"
                      src="/img/card_backs/viztorony.jpg"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <Link href="https://www.instagram.com/georgecobbler">
                <a
                  className="sponsors__card_container"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="sponsors__card sponsors__card--cobbler">
                    <img
                      className="sponsors__card_image"
                      src="/img/card_backs/cobbler.png"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <Link href="https://www.facebook.com/dugulaselharitas.balkanybaneskornyeken">
                <a
                  className="sponsors__card_container"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="sponsors__card sponsors__card--dugulasklinika">
                    <img
                      className="sponsors__card_image"
                      src="/img/card_backs/dugulasklinika.png"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <Link href="https://hu.wikipedia.org/wiki/%C3%89p%C3%BClet">
                <a
                  className="sponsors__card_container"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="sponsors__card sponsors__card--anonim">
                    <img
                      className="sponsors__card_image"
                      src="/img/card_backs/anonim.png"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <Link href="https:/poloid.hu">
                <a
                  className="sponsors__card_container"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="sponsors__card sponsors__card--cobbler">
                    <img
                      className="sponsors__card_image"
                      src="/img/card_backs/poloid.png"
                      alt=""
                    />
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
