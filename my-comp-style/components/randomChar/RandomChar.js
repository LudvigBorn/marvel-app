import "./randomChar.scss";
import photo1 from "../../assets/img/thor.jpeg";
import photo2 from "../../assets/img/mjolnir.png";


const RandomChar = () => {
  return (
    <div className="randomchar">
      <div className="randomchar__block">
        <img src={photo1} alt="Random charcter" className="randomchar__img" />
        <div className="randomchar__info">
          <h2 className="randomchar__name">THOR</h2>
          <p className="randomchar__descr">
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
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
        <img src={photo2} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

export default RandomChar;
