import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
//import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { useState } from "react";
import decoration from "../../resources/img/vision.png";
import CharGroup from "../charGroup/CharGroup";
import { Helmet } from "react-helmet";



const MainPage = () => {


  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    console.log('main page',id)
    setChar(id);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information" />
        <title>Marvel information portal</title>
      </Helmet>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>

        <ErrorBoundary>
          <CharGroup selectedChar={selectedChar} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
