//import AppBanner from "../appBanner/AppBaner";
import "../../styles//styles.scss";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import bg from "../../assets/img/vision.png";

const App = () => {
  return (
    <div className="app">
      {/* <AppBanner></AppBanner> */}
      <AppHeader />
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList />
          <CharInfo />
        </div>
        <img src={bg} alt="" className="bg-decoration" />
      </main>
    </div>
  );
};

export default App;
