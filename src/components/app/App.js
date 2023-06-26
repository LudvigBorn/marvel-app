import { lazy , Suspense} from "react";
import AppHeader from "../appHeader/AppHeader";

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './app.scss'
import Spinner from "../spinner/Spinner";
import SinglePage from "../pages/SinglePage";

const SingleCharLayout = lazy(() => import('../SingleCharLayout/SingleCharLayout'))
const Page404 = lazy(()=> import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(()=> import('../pages/ComicsPage'))

const App = () => {

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics/*" element={<ComicsPage />} />
              <Route
                path="/char/:id"
                element={
                  <SinglePage
                    Component={SingleCharLayout}
                    dataType={"char"}
                  />
                }
              />
              <Route path="*" element={<Page404 />}></Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;