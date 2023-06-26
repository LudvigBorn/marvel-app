import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import CharSearchForm from "../charSearchForm/CharSearchForm";

import "./charGroup.scss";

const CharGroup = ({ selectedChar }) => {
  console.log(selectedChar)
  return (
    <div className="char__group">
      <CharInfo charId={selectedChar} />
      <ErrorBoundary>
        <CharSearchForm />
      </ErrorBoundary>
    </div>
  );

};
export default CharGroup;