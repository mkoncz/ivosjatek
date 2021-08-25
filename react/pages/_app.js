import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/common.css'
import '../styles/pages/404.css'
import '../styles/pages/card.css'
import '../styles/pages/cards.css'
import '../styles/pages/contact.css'
import '../styles/pages/game.css'
import '../styles/pages/posts.css'
import '../styles/pages/sponsors.css'
import '../styles/pages/welcome.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}