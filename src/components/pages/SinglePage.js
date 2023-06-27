//import "./singleComicPage.scss";
import {useParams,Link} from 'react-router-dom'

import useMarvelService from "../../services/MarvelService";
import { useEffect, useState } from "react";


import setContent from '../../utils/setContent';





const SinglePage = ({Component,dataType}) => {
  console.log('work')
  const { id } = useParams();
  const [data,setData] =useState(null)
  const {process,setProcess, error,loading,getComic,clearError,getCharacter} = useMarvelService();


  useEffect(()=> {
      updateData()
  },[id])

  const updateData = () => {
    clearError();
    switch (dataType) {
      case 'comic':
        getComic(id)
          .then(onDataLoadded)
          .then(()=>setProcess('confirmed'))
        break
      case 'char':
        getCharacter(id)
          .then(onDataLoadded)
          .then(() => setProcess("confirmed"));
        break
      default:
        console.log('not')
    }

  }
  const onDataLoadded = (data) => {
    setData(data)
  }


  // const errorMessage = error ? <ErrorMessage /> : null;
  // const spinner = loading  ? <Spinner /> : null;
  // const content = !(loading || error || !data) ? (
  //   <Component data={data}/>
  // ) : 'not work';


  return (
    <>
      {/* {errorMessage}
      {spinner}
      {content} */}
      {setContent(process,Component,data)}
    </>
  );
};



export default SinglePage;


