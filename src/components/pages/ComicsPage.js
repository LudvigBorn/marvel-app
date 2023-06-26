import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import  SinglePage  from "./SinglePage";
import {Routes,Route} from 'react-router-dom'
import SingleComicLayout from "../SingleComicLayout/SingleComicLayout";
import { Helmet } from "react-helmet";


const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information" />
        <title>Comics page</title>
      </Helmet>

      <AppBanner />
      <Routes>
        <Route
          path="/:id"
          element={
            <SinglePage Component={SingleComicLayout} dataType={"comic"} />
          }
        />
        <Route path="/" element={<ComicsList />} />
      </Routes>
      {/* <ComicsList /> */}
    </>
  );
}

export default ComicsPage;