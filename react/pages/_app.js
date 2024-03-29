import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import "../styles/components/adult-consent.scss";
import "../styles/components/cards.scss";
import "../styles/components/cookie-consent.scss";
import "../styles/components/drinking-game.scss";
import "../styles/components/game-card.scss";
import "../styles/components/navbar.scss";
import "../styles/components/post.scss";
import "../styles/pages/404.scss";
import "../styles/pages/contact.scss";
import "../styles/pages/cookies.scss";
import "../styles/pages/game.scss";
import "../styles/pages/games.scss";
import "../styles/pages/menu.scss";
import "../styles/pages/posts.scss";
import "../styles/pages/sponsors.scss";
import "animate.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
