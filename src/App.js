import './App.css';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Gifts from './Components/Gifts';
import MyGift from './Components/Gift';
import Order from './Components/Order'
import Store from './Components/Store'
import Profile from './Components/Profile'
import Shop from './Components/Shop'
import { Provider } from "react-redux";
import {store} from './features/store'

function App() {
  return (
    <Provider store={store}>
    <div> 
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/gift">
            <Gifts/>
          </Route>
          <Route path="/gifts/:giftId">
            <MyGift/>
          </Route>
          <Route path="/order">
            <Order/>
          </Route>    
          <Route path="/store">
            <Store/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
      
        </Switch>
       <Footer/>
      </Router>
    </div>
    </Provider>

  );
}

export default App;
