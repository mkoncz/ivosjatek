// Import React module.
import React from "react";
import Modal from 'react-modal';

// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";
// Import Instagram Embed tool.
import InstagramEmbed from "react-instagram-embed";

import adult_logo from "./../../../../img/18.png";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "#000",
        textAlign: "center"
    }
};

/**
 * The page contains a post.
 * Posts are not really relevant for this website. 
 * They are needed because of SEO reasons.
 */
const PostAug = () => {
    const [modalIsOpen, setIsOpen] = React.useState(true);

    return (
        <div className="page-frame">
            <Helmet>
                <title>A világ legdrágább italai - a királyok, nemesek, mágnások kiváltságai</title>
                <meta name="description" content="A világ legdrágább italai - a királyok, nemesek, mágnások kiváltságai" />
                <link rel="canonical" href="https://ivosjatek.hu/p/a-vilag-legdragabb-italai" />
                <meta name="twitter:title" content="A világ legdrágább italai - a királyok, nemesek, mágnások kiváltságai" />
                <meta name="twitter:description" content="A világ legdrágább italai - a királyok, nemesek, mágnások kiváltságai" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ivosjatek.hu/p/a-vilag-legdragabb-italai" />
                <meta property="og:title" content="A világ legdrágább italai - a királyok, nemesek, mágnások kiváltságai" />
                <meta property="og:description" content="A világ legdrágább italai - a királyok, nemesek, mágnások kiváltságai" />
                <meta property="og:locale" content="hu_HU" />
            </Helmet>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setIsOpen(false) }}
                style={customStyles}
                contentLabel="18 éves"
            >
                <div className="post-card-big">
                    <div className="pre-card">
                        <img className="adult_logo" src={adult_logo} alt="18" />
                        <div className="question_block">
                            <h5>Kérhetnék egy személyit?</h5>
                            <p>Az ivosjatek.hu 18 éven felülieknek készült.</p>
                        </div>
                        <button
                            className="btn btn-warning btn-lg"
                            onClick={() => { setIsOpen(false) }}>
                            Felnőtt vagyok
                        </button>
                    </div>
                </div>
            </Modal>

            <h3 className="post-h">A világ legdrágább italai</h3>

            <p className="post-p">
                Az ivás örömét évezredek óta ismerjük. Aztán az idők során megtanultunk finom alkoholos italokat előállítani. Ezek készítésére mára már számos technológia áll rendelkezésünkre.
               Az italok végső ára sok tényező függvénye: az összetevők, az eljárás, a minőség, az érlelési idő hossza.  Az igen drága italok fogyasztása a történelem során mindig a királyok, nemesek, mágnások kiváltsága volt.
               A ma ismert legdrágább italok az alábbi listán szemlézhetőek. 
            </p>
            <h4 className="post-h">
                10. 1811 Chateau d’Yquem (Ár: 130 000 $)
            </h4>
            <p className="post-p">
                A Chateau d’Yquem Franciaországban a Bordeaux régióban már 1711 óta foglalkozik borok készítésével.
                Tőlük való ez a rendkívül ritka, régi fehérbor.
                A borszakértő Robert Parker ezt a bort a tökéletes 100-asnak ítélte.
                Ahogy a mondás tartja, borban az öregebb a jobb! Alapvetően tehát emiatt lehetett részese a legdrágább italok felsorolásának.
            </p>
            <img width="100%" src="https://www.worldstopmost.com/wp-content/uploads/2016/08/1811-Chateau-d%E2%80%99Yquem-Worlds-Most-Expensive-Alcohol-2016.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>

            <h4 className="post-h">
                9. Penfolds Ampoule (Ár: $ 170,000)
            </h4>
            <p className="post-p">
                De ha Ön jobb szereti a vöröset, a Penfolds Ampoule a jó választás! Ez a világ legdrágább vörösbora, ára 170 ezer dollár! Mindössze 12 palackot gyártottak és a világhírű bútorkészítő, Andrew Bartlett fadobozában vásárolható. Királyi megjelenés a királyi borhoz!
            </p>
            <img width="100%" src="https://www.worldstopmost.com/wp-content/uploads/2016/08/Penfolds-Ampoule-Worlds-Most-Expensive-Alcohol-2017.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>

            <h4 className="post-h">
                8. Bombay Sapphire Revelation (Ár: $ 200,000)
            </h4>
            <p className="post-p">
                Prémium minőségű gin 200 000 dollárért. Egyedi ízét a felhasznált tízféle növényi összetevő adja.
                A Karim Rashid megrendelésére készített öt kristálypalack metszett zafírokkal és gyémántokkal van díszítve. Az áttetsző kék palack könnyen felismerhetővé teszi.
            </p>
            <img width="100%" src="http://www.gasztromagazin.hu/wp-content/uploads/2017/12/Bombay-Sapphire-Revelation-Worlds-Most-Expensive-Alcohol-2016.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>

            <h4 className="post-h">
                7. Royal Salute Tribute to Honor (Ár: $ 200,000)
            </h4>
            <p className="post-p">
                A Tribute to Honor elkészítésével a Royal Salute Master Blenders adózik tisztelettel a brit koronaékszerek iránt.
                Ez a whisky a Royal Salute legritkább tételeinek keveréke, melyek közül a legifjabb is 45 éves!
                A palackról is érdemes szót ejteni: 400 fehér és fekete gyémánt ragyog a felületén….
            </p>
            <img width="100%" src="http://www.gasztromagazin.hu/wp-content/uploads/2017/12/Royal-Salute-Tribute-to-Honor-Worlds-Most-Expensive-Alcohol-2018.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>

            <h4 className="post-h">
                6. Dalmore 62 (Ár: 215 000 $)
             </h4>
            <p className="post-p">
                Aki valaha is kóstolta ezt az italt, sosem felejti el a nevét. Világszerte ünnepelték elkészültét.
                A Dalmore 62 maga a megtestesült luxus a scotch whisky rajongói számára, egyike a világ legdrágább whiskyjeinek.
                A szerelmeseknek azonban tudniuk kell, hogy mindössze 12 palack van a Dalmore 62-ből – érdemes sietni a vásárlással!
             </p>
            <img width="100%" src="http://www.gasztromagazin.hu/wp-content/uploads/2017/12/Dalmore-62-Worlds-Most-Expensive-Alcohol-2017.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>

            <h4 className="post-h">
                5. Armand de Brignac Midas (Ár: $ 275,000)
                        </h4>
            <p className="post-p">
                Tökéletes választás, ha a legjobbat keresed!
                A Midas Ace of Spades néven is ismert. Ez esetben a megdöbbentő ár oka a különleges üveg, amiben az ital érkezik: 30 literes és 50 kilós…. A palackot az akkor még csak 14 éves Flavor Flav, a híres amerikai rapper tervezte. Még egy hagyományos palack is 300 dollárba kerül….
                Az egyedülállóan hatalmas palack tökéletes azoknak, akik egy egész éjszakás mulatságra vágynak!
                Pompás pezsgőt, valakinek?
            </p>
            <img width="100%" src="http://www.gasztromagazin.hu/wp-content/uploads/2017/12/Armand-de-Brignac-Midas-Worlds-Most-Expensive-Alcohol-2017.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>

            <h4 className="post-h">
                4. 64 éves Macallan Lalique (Ár: $ 460,000)
            </h4>
            <p className="post-p">
                Ez a whisky a valaha eladott legdrágább whisky, a maga nemében első a Guiness Rekordok Könyvében!
                A Macallan ma Skócia egyik legismertebb márkája. Ritka, roppant idős whiskyjeinek gyűjteménye világhírű.
            </p>
            <img width="100%" src="http://www.gasztromagazin.hu/wp-content/uploads/2017/12/Macallan-64-Year-Old-in-Lalique-Worlds-Most-Expensive-Alcohol-2016.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>

            <h4 className="post-h">
                3. Diva Vodka (Ár: 1 millió dollár)
            </h4>
            <p className="post-p">
                Ez ma a világ egyik legdrágább vodkája.
                Tökéletesen kialakított palackban vásárolható, amelynek közepén egyedi Swarowski-kristályok oszlopa emelkedik.
                Ha rácsodálkozik a magas árra, el kell mondanunk, hogy az ár tükrözi az ital példátlanul finom ízét. Ez a vodka természetes forrásvízből készül, gyémántokon szűrik át és végül a kristályokkal töltött üvegpalackban kínálják.
                A vodka szerelmesei megőrülnének egy kortyáért!
            </p>
            <img width="100%" src="http://www.gasztromagazin.hu/wp-content/uploads/2017/12/Diva-Vodka-Worlds-Most-Expensive-Alcohol-2018.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>

            <h4 className="post-h">
                2. Tequila Ley .925 (Ár: 3,5 millió dollár)
                        </h4>
            <p className="post-p">
                Remek lehetőség azoknak a gazdagoknak, akik nem is elsősorban az ital minőségéért, mint inkább a megjelenéséért fizetnek. A három és fél millió dolláros ár a kifogástalanul megtervezett butélia miatt alakult ki.
                A tequila egy tökéletes alakú, gyémántokkal gazdagon dekorált, platinából készült tartályba kerül….
               </p>
            <img width="100%" src="https://www.worldstopmost.com/wp-content/uploads/2016/08/Tequila-Ley-.925-Worlds-Most-Expensive-Alcohol-2017.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>

            <h4 className="post-h">
                1. Billionaire Vodka (Ár: 3,7 millió dollár)                        </h4>
            <p className="post-p">
                Ez a vodka, ezért az árért ma a világ legdrágább vodkája. Sőt, a világ legdrágább itala.
                Igazi milliomosnak kell lenni ahhoz, hogy akár egy kortyot is megvehess ebből a vodkából.
                A palack méltó a nevéhez: 3000 gyémánttal van fedve. Maga az ital is különlegesség a maga csodálatos ízével – állítólag….
                Valójában ez (is) egy megfontolandó befektetés, a vásárlója a jó megtérülésben, az értéknövekményben bízhat.

                Elérhetetlen italok, de ne is erre vágyjunk! Jó, ha ismerjük ezeket a híreket. Jó, ha rácsodálkoznk az árakra, a palackok kivitelezésére.
                De ha egy palack pezsgővel vagy tokaji aszúval ünnepelünk Családunkkal, Barátainkkal, lehetünk mi mégis sokkal boldogabbak a Billionare tulajdonosánál…
            </p>
            <img width="100%" src="http://www.gasztromagazin.hu/wp-content/uploads/2017/12/Billionaire-Vodka-Worlds-Most-Expensive-Alcohol-2018.jpg"></img>
            <p className="post-source-p">
                Forrás: worldstopmost.com
            </p>


            <p className="post-p">
                Forrás: <a href="http://www.gasztromagazin.hu/2017/12/22/vilag-legdragabb-italai-2017-ben/">gasztromagazin</a>
            </p>

            <h4 className="post-h">
                A cikk a következő kártyákat inspirálta:
            </h4>

            <div align="center">
                <div className="post-card">
                    <div className="post-card-text">
                        Akinek vodka (is) van a poharában, iszik.
                    </div>
                </div>
                <div className="post-card">
                    <div className="post-card-text">
                        Mindenki mond egy whiskey márkát. A jobbra ülő kezd, és addig mennek a körök, amíg valaki már nem tud mondani. Ő iszik.
                </div>
                </div>
                <div className="post-card">
                    <div className="post-card-text">
                        Az iszik, akinek a legdrágább pia van a poharában.
                    </div>
                </div>
                <div>
                    Ivósjáték: <a href="/">katt ide</a>
                </div>
            </div>
        </div >
    );
}

// Export component.
export default PostAug;