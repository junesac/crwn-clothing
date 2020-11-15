import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
