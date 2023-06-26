import "./charList.scss";
import photo1 from "../../assets/img/thor.jpeg";

const CharList = () => {
  return (
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
  );
};

export default CharList;
