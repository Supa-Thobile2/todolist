import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={Register}></Route>
        <Route path="/home">
             <Home />
        </Route>
      </Switch>
     
    </Router>

      <Home/>
     
    </div>
  );
}

export default App;
