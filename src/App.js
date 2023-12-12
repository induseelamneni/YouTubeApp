// import logo from './logo.svg';
import {Provider} from "react-redux"
import './App.css';
// import Youtube from './components/Youtube';
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import WatchPage from "./components/WatchPage"


import store from './utils/store';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Body from "./components/Body";


const appRouter = createBrowserRouter([{
  path:"/",
  element:  <MainContainer/>,
  children:[
    {
      path:"/",
      element: <Body />
    },
    {
      path:"watch",
      element:<WatchPage />
    },

  ]

},


])

function App() {
  return (
    <Provider store = {store}>
       <Header />
      
    <div >
      <RouterProvider  router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
