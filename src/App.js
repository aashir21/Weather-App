import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NoResult from './components/NoResult';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/searchresult/:cityName' element={<SearchResult/>}></Route>
        <Route exact path='/noresult/:city' element={<NoResult></NoResult>}></Route>
      </Routes>
    </>
  );
}

export default App;
