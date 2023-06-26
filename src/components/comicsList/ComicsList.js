import './comicsList.scss';
import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import {Link} from 'react-router-dom'

const ComicsList = () => {
    const [comicList,setComicList] = useState([]);
    const [newItemLoading,setNewItemLoading] = useState(false);
    const [comicEnded,setComicEnded] = useState(false);
    const [offset,setOffset] = useState(10);

    const {error,loading,getAllComics} = useMarvelService();

    useEffect(()=> {
        onRequest(offset,true);
    },[]);

    const onRequest = (offset,initial) => {
        setNewItemLoading(!initial)
        getAllComics(offset)
        .then(onComicsListLoaded)
    }


    const onComicsListLoaded = (newComicsList) => {

        const ended = newComicsList.length < 8

        setComicList(comicList => [...comicList,...newComicsList])
        setNewItemLoading(false)
        setOffset(offset => offset + 8)
        setComicEnded(ended)
    }


    function renderItems (arr) {

        const items = arr.map((comics,i) => {

            const price = comics.price ? comics.price : "NOT AVAILABLE";
            return (
              <li
                //onClick={() => {props.onComicSelected(comics.id)}}
                className="comics__item"
                key={i}
                tabIndex={0}
              >
                <Link to={`${comics.id}`}>
                  <img
                    src={comics.thumbnail}
                    alt={comics.title}
                    className="comics__item-img"
                  />
                  <div className="comics__item-name">{comics.title}</div>
                  <div className="comics__item-price">{price}</div>
                </Link>
              </li>
            );

        })


        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }


    const items = renderItems(comicList);
    const spiner = loading && !newItemLoading ? <Spinner/> : null
    const errorMessage = error ? <ErrorMessage/> : null

    return (
      <div className="comics__list">
        {errorMessage}
        {spiner}
        {items}

        {/* <li className="comics__item">
                    <a href="#">
                        <img src={xMen} alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={uw} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={xMen} alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={uw} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={xMen} alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={uw} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={xMen} alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li> */}

        <button
          onClick={() => onRequest(offset)}
          className="button button__main button__long"
          disabled = {newItemLoading}
          style = {{'display': comicEnded ? 'none' : 'block'}}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
}

export default ComicsList;