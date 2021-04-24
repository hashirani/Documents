
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import FriendsDetail from './components/FriendsDetail/FriendsDetail';



function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route path ="/friend/:friendId">
          <FriendsDetail/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
   
  
     
    
   </Router>
  );
}

export default App;
