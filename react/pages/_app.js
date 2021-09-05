import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import "../styles/navbar.scss";
import "../styles/common.css";
import "../styles/components/game-card.scss";
import "../styles/pages/404.scss";
import "../styles/pages/cards.scss";
import "../styles/pages/contact.scss";
import "../styles/pages/game.scss";
import "../styles/pages/menu.scss";
import "../styles/pages/posts.css";
import "../styles/pages/sponsors.scss";
import "animate.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
