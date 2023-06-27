import './comicsList.scss';
import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import {Link} from 'react-router-dom'

const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newItemLoading ? <Component /> : <Spinner />;
    case "confirmed":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpected process state");
  }
};

const ComicsList = () => {
    const [comicList,setComicList] = useState([]);
    const [newItemLoading,setNewItemLoading] = useState(false);
    const [comicEnded,setComicEnded] = useState(false);
    const [offset,setOffset] = useState(10);

    const {process,setProcess, error,loading,getAllComics} = useMarvelService();

    useEffect(()=> {
        onRequest(offset,true);
    },[]);

    const onRequest = (offset,initial) => {
        setNewItemLoading(!initial)
        getAllComics(offset)
        .then(onComicsListLoaded)
        .then(() => setProcess('confirmed'))
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


    //const items = renderItems(comicList);
    // const spiner = loading && !newItemLoading ? <Spinner/> : null
    // const errorMessage = error ? <ErrorMessage/> : null

    return (
      <div className="comics__list">
        {/* {errorMessage}
        {spiner}
        {items} */}
        {setContent(process,()=>renderItems(comicList),newItemLoading)}

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