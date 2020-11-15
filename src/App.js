import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';

const HatsPage = (props) => { 
  return (
    <div>
      <h1> HATS </h1> 
    </div>
  );
};

function App() {
  return (
    <div> 
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
