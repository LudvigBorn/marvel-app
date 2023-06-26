import "./charInfo.scss";
import photo1 from "../../assets/img/thor.jpeg";

const CharInfo = () => {
  return (
    <div className="char__info">
      <div className="char__basics">
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
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
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
      </ul>
    </div>
  );
};

export default CharInfo;
