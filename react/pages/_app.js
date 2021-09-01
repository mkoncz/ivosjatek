import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/common.css";
import "../styles/components/game-card.scss";
import "../styles/pages/404.scss";
import "../styles/pages/cards.scss";
import "../styles/pages/contact.css";
import "../styles/pages/game.scss";
import "../styles/pages/menu.scss";
import "../styles/pages/posts.css";
import "../styles/pages/sponsors.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
