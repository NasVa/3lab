
import { useTranslation } from 'react-i18next'
import Home from './components/Home'
import PoetsList from "./components/PoetsList/PoetsList"
import Header from './components/Header/Header'
import PoetCard from "./components/PoetCard/PoetCard";
import Footer from "./components/Footer/Footer"
import { Route, BrowserRouter } from "react-router-dom";
import Search from "./components/PoetsList/search";
import {SearchHeader} from "./components/PoetsList/searchHeader";

function App(){
    const { t } = useTranslation();
  return (
      <BrowserRouter>
          <div>
              <Header />
              <Route exact path="/" component={Home}/>
              <Route exact path="/PoetsList">
                  <SearchHeader />
                  <Search />
              </Route>
              <Route path="/PoetCard" component={PoetCard}/>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;

