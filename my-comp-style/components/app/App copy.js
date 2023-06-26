import "./app.scss";
import photo1 from "../../assets/img/thor.jpeg";
import photo2 from "../../assets/img/mjolnir.png";
import bg from "../../assets/img/vision.png";
// import banner from "../../assets/img/Avengers.png";
// import logo from "../../assets/img/Avengers_logo.png";
// import comics from "../../assets/img/x-men.png";




const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">
          <a href="/#">
            <span>Marvel</span> information portal
          </a>
        </h1>
        <nav className="app__menu">
          <ul>
            <li>
              <a href="/#">Characters</a>
            </li>
            /
            <li>
              <a href="/#">Comics</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <main>
        <div className="app__banner">
          <img src={banner} alt="" />
          <div className="app__banner-text">
            New comics every week! <br />
            Stay tuned!
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="single-comic">
          <img src={comics} alt="" className="single-comic__img" />
          <div className="single-comic__info">
            <h2 className="single-comic__name">LOKI</h2>
            <p className="single-comic__descr">
              In Norse mythology, Loki is a god or jötunn (or both). Loki is the
              son of Fárbauti and Laufey, and the brother of Helblindi and
              Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the
              wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is
              the father of Nari and/or Narfi and with the stallion Svaðilfari
              as the father, Loki gave birth—in the form of a mare—to the
              eight-legged horse Sleipnir. In addition, Loki is referred to as
              the father of Váli in the Prose Edda.
            </p>
            <p className="single-comic__descr">144 pages</p>
            <p className="single-comic__descr">Language: en-us</p>
            <p className="single-comic__price">9.99$</p>
          </div>
          <a href="/#" className="single-comic__back">Back to all</a>
        </div>
      </main> */}
      {/* <main>
        <div className="app__banner">
          <img src={banner} alt="" />
          <div className="app__banner-text">
            New comics every week! <br />
            Stay tuned!
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="comics__list">
          <ul className="comics__grid">
            <li className="comics__item">
              <a href="/#">
                <img src={comics} alt="" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="/#">
                <img src={comics} alt="" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="/#">
                <img src={comics} alt="" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="/#">
                <img src={comics} alt="" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="/#">
                <img src={comics} alt="" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="/#">
                <img src={comics} alt="" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="/#">
                <img src={comics} alt="" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="/#">
                <img src={comics} alt="" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
          </ul>
        </div>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </main> */}

      <main>
        <div className="randomchar">
          <div className="randomchar__block">
            <img
              src={photo1}
              alt="Random charcter"
              className="randomchar__img"
            />
            <div className="randomchar__info">
              <h2 className="randomchar__name">THOR</h2>
              <p className="randomchar__descr">
                As the Norse God of thunder and lightning, Thor wields one of
                the greatest weapons ever made, the enchanted hammer Mjolnir.
                While others have described Thor as an over-muscled, oafish
                imbecile, he's quite smart and compassionate...
              </p>
              <div className="randomchar__btns">
                <a href="/#" className="button button__main">
                  <div className="inner">homepage</div>
                </a>
                <a href="/#" className="button button__secondary">
                  <div className="inner">Wiki</div>
                </a>
              </div>
            </div>
          </div>
          <div className="randomchar__static">
            <p className="randomchar__title">
              Random character for today!
              <br />
              Do you want to get to know him better?
            </p>
            <p className="randomchar__title">Or choose another one</p>
            <button className="button button__main">
              <div className="inner">try it</div>
            </button>
            <img
              src={photo2}
              alt="mjolnir"
              className="randomchar__decoration"
            />
          </div>
        </div>

        <div className="char__content">
          <div className="char__list">
            <ul className="char__grid">
              <li className="char__item">
                <img src={photo1} alt="" />
                <div className="char__name">ABYSS</div>
              </li>
              <li className="char__item char__item_selected">
                <img src={photo1} alt="" />
                <div className="char__name">ABYSS</div>
              </li>
              <li className="char__item ">
                <img src={photo1} alt="" />
                <div className="char__name">ABYSS</div>
              </li>
              <li className="char__item">
                <img src={photo1} alt="" />
                <div className="char__name">ABYSS</div>
              </li>
              <li className="char__item">
                <img src={photo1} alt="" />
                <div className="char__name">ABYSS</div>
              </li>
              <li className="char__item">
                <img src={photo1} alt="" />
                <div className="char__name">ABYSS</div>
              </li>
              <li className="char__item">
                <img src={photo1} alt="" />
                <div className="char__name">ABYSS</div>
              </li>
              <li className="char__item">
                <img src={photo1} alt="" />
                <div className="char__name">ABYSS</div>
              </li>
              <li className="char__item">
                <img src={photo1} alt="" />
                <div className="char__name">ABYSS</div>
              </li>
            </ul>
            <button className="button button__main button__long">
              <div className="inner">load more</div>
            </button>
          </div>
          <div className="char__info">
            {/* <div className="char__basics">
              <img src={photo1} alt="" className="char__info-img" />
              <div>
                <h2 className="char__info-name">LOKI</h2>
                <div className="char__btns">
                  <a href="/#" className="char__main">
                    <div className="inner">homepage</div>
                  </a>
                  <a href="/#" className="char__secondary">
                    <div className="inner">wiki</div>
                  </a>
                </div>
              </div>
            </div>
            <p className="char__descr">
              In Norse mythology, Loki is a god or jötunn (or both). Loki is the
              son of Fárbauti and Laufey, and the brother of Helblindi and
              Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the
              wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is
              the father of Nari and/or Narfi and with the stallion Svaðilfari
              as the father, Loki gave birth—in the form of a mare—to the
              eight-legged horse Sleipnir. In addition, Loki is referred to as
              the father of Váli in the Prose Edda.
            </p>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
              <li className="char__comics-item">
                <a href="/#">All-Winners Squad: Band of Heroes (2011) #3</a>
              </li>
              <li className="char__comics-item">
                <a href="/#">All-Winners Squad: Band of Heroes (2011) #3</a>
              </li>
              <li className="char__comics-item">
                <a href="/#">All-Winners Squad: Band of Heroes (2011) #3</a>
              </li>
            </ul> */}
            <p className="char__select">
              Please select a character to see information
            </p>
            <div className="skeleton">
              <div className="pulse skeleton__header">
                <div className="pulse skeleton__circle"></div>
                <div className="pulse skeleton__mini"></div>
              </div>
              <div className="pulse skeleton__block"></div>
              <div className="pulse skeleton__block"></div>
              <div className="pulse skeleton__block"></div>
            </div>
          </div>
        </div>
        <img src={bg} alt="" className="bg-decoration" />
      </main>
    </div>
  );
};

export default App;
