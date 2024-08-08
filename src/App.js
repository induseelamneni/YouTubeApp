import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Provider} from "react-redux"
import './App.css';
import WatchPage from "./components/WatchPage"


import store from './utils/store';
import Header from "./components/Header";
import Body from "./components/Body";
import WatchSearchedVideo from "./components/WatchSearchedVideo";


function App(){
  return(
    <>
    <BrowserRouter>
    <Provider store = {store}>
        <Header />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/watch' element={<WatchPage />} />
          <Route path="/results" element={<WatchSearchedVideo/>}/>
        </Routes>
        </Provider>

      </BrowserRouter>
      </>
  )
}

export default App;
