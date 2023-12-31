import './charList.scss';
import { useState,useEffect,useRef,useMemo } from 'react';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import PropTypes from "prop-types";
import {TransitionGroup,CSSTransition} from 'react-transition-group'
//import setContent from '../../utils/setContent';

const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newItemLoading ? <Component/>  :<Spinner />;
    case "confirmed":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpected process state");
  }
};

const  CharList = (props) => {
  const [charList,setCharList] = useState([]);
  const [newItemLoading,setNewItemLoading] = useState(false);
  const [offset,setOffset] = useState(210);
  const [charEnded,setCharEnded] = useState(false);


  const {loading,error,process,setProcess,getAllCharacters} = useMarvelService();

  useEffect(() => {
    onReqest(offset,true);
  },[])

  const onReqest = (offset,initial) => {
    setNewItemLoading(!initial);
    getAllCharacters(offset)
      .then(onCharListLoaded)
      .then(()=>setProcess('confirmed'))
  }

  // componentDidMount() {
  //   this.onReqest();
  //   window.addEventListener('scroll', (event) => {
  //     // const scrollHeight = Math.max(
  //     //   document.body.scrollHeight,
  //     //   document.documentElement.scrollHeight,
  //     //   document.body.offsetHeight,
  //     //   document.documentElement.offsetHeight,
  //     //   document.body.clientHeight,
  //     //   document.documentElement.clientHeight
  //     // );
  //     this.onScroll();
  //     })
  // }

  // componentWillUnmount() {
  //       this.setState({
  //         charList: [],
  //       });
  //   window.removeEventListener('scroll',this.onScroll)
  // }
  // onScroll = () => {
  //   const {offset,newItemLoading,charEnded} = this.state
  //   if (newItemLoading) return;
  //   if (charEnded) {
  //     window.removeEventListener('scroll',this.onScroll)
  //   }
  //   if (document.documentElement.clientHeight + window.pageYOffset >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     this.onReqest(offset);
  //   }
  // }






  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if(newCharList.length < 9) {
      ended = true;
    }

    setCharList(charList => [...charList, ...newCharList]);
    setNewItemLoading(false);
    setOffset(offset => offset + 9)
    setCharEnded(ended)
  }

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
    itemRefs.current[id].classList.add("char__item_selected");
    itemRefs.current[id].focus();
  }

  function renderItems(arr) {
    console.log('render')
    const items = arr.map((item,i) => {
      let imgStyle ={'objectFit': 'cover'};
      if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
         imgStyle = { 'objectFit': "unset" };
      }
      return (
        <CSSTransition
          key={item.id}
          timeout={500}
          classNames="item"
        >
          <li
            className="char__item"
            tabIndex={0}
            //key={item.id}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={() => {
              props.onCharSelected(item.id);
              focusOnItem(i);
            }}
            onKeyPress={(e) => {
              if (e.key === " " || e.key === "Enter") {
                props.onCharSelected(item.id);
                focusOnItem(i);
              }
            }}
          >
            <img src={item.thumbnail} alt={item.name} style={imgStyle} />
            <div className="char__name">{item.name}</div>
          </li>
        </CSSTransition>
      );
    })
    return (
      <ul className="char__grid">
        <TransitionGroup component={null}>{items}</TransitionGroup>
      </ul>
    );

  }
  //const items = renderItems(charList)

  // const errorMessage = error ? <ErrorMessage/> : null
  // const spinner = loading && !newItemLoading ? <Spinner/> : null


  const elements = useMemo(()=> {
    return setContent(process, () => renderItems(charList), newItemLoading);
  },[process])
  return (
    <div className="char__list">
      {elements}
      <button

        className="button button__main button__long"
        onClick={() => onReqest(offset)}
        disabled={newItemLoading}
        style={{ display: charEnded ? "none" : "block" }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );

}

CharList.prototypes = {
  onCharSelected: PropTypes.func.isRequired,
};


export default CharList;
