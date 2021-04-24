import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components /Home/Home';

import CountryDetail from './components /CountryDetail/CountryDetail';
import NoMatch from './components /NoMatch/NoMatch';

function App() {
  return (
          <Router> 
            <Switch>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path ="/country/:countryname">
               <CountryDetail></CountryDetail>
             </Route>
             <Route exact path ="/">
              <Home/>  
             </Route>
             <Route path ="*">
              <NoMatch/>
            </Route>
            
          </Switch>
          </Router>
   
  );
}

export default App;
